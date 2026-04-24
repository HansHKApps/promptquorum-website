'use client';

import React, { useState, useMemo, useEffect } from 'react';

interface GPU {
  name: string;
  vram: number;
  price?: number;
}

interface Tooltip {
  title: string;
  description: string;
}

const TOOLTIPS: Record<string, Tooltip> = {
  modelSize: {
    title: 'Model Size',
    description: 'The number of parameters in billions (B). Larger models (70B) are more capable but require more VRAM. Examples: 7B is good for general tasks, 13B for coding/analysis, 70B for advanced reasoning.'
  },
  quantization: {
    title: 'Quantization',
    description: 'Reduces precision of model weights to save VRAM. FP16 is full precision (100% quality), Q8 = 8-bit (99% quality), Q4 = 4-bit (95% quality). Q4 is standard; saves ~75% VRAM with minimal quality loss.'
  },
  context: {
    title: 'Context Length',
    description: 'Maximum conversation history the model can remember. 4K = ~3,000 words, 8K = ~6,000 words, 16K = ~12,000 words. Longer context uses more VRAM during inference.'
  },
  batchSize: {
    title: 'Batch Size',
    description: 'Number of requests processed simultaneously. Size 1 = one user at a time (single-user chat). Size 4+ = multiple users (APIs/servers). Larger batches use more VRAM but improve throughput.'
  },
  useCase: {
    title: 'Use Case',
    description: 'Single-user chat = one person talking to the model. Multi-user API = server handling many concurrent requests. Batch processing = running many requests sequentially (no real-time requirement).'
  }
};

interface Preset {
  name: string;
  modelSize: string;
  quantization: string;
  contextLength: string;
  batchSize: string;
}

const PRESETS: Preset[] = [
  {
    name: 'Llama 3.1 8B',
    modelSize: '8B',
    quantization: 'Q5',
    contextLength: '8K',
    batchSize: '1'
  },
  {
    name: 'Mistral 7B',
    modelSize: '7B',
    quantization: 'Q4',
    contextLength: '16K',
    batchSize: '1'
  },
  {
    name: 'Llama 2 13B',
    modelSize: '13B',
    quantization: 'Q5',
    contextLength: '4K',
    batchSize: '1'
  },
  {
    name: 'Llama 2 70B',
    modelSize: '70B',
    quantization: 'Q4',
    contextLength: '4K',
    batchSize: '1'
  }
];

const GPUS: GPU[] = [
  { name: 'RTX 3060', vram: 12, price: 400 },
  { name: 'RTX 4070', vram: 12, price: 600 },
  { name: 'RTX 4070 Ti', vram: 12, price: 700 },
  { name: 'RTX 4080', vram: 16, price: 1200 },
  { name: 'RTX 4090', vram: 24, price: 1800 },
  { name: 'Mac mini M5 (16 GB)', vram: 16, price: 0 },
  { name: 'Mac mini M4 (16 GB)', vram: 16, price: 0 },
  { name: 'MacBook Pro (24 GB)', vram: 24, price: 0 },
  { name: 'M3 Max (36 GB)', vram: 36, price: 0 },
];

const MODEL_SIZES: { [key: string]: number } = {
  '1B': 1,
  '3B': 3,
  '7B': 7,
  '8B': 8,
  '13B': 13,
  '32B': 32,
  '70B': 70,
  '405B': 405,
};

const QUANT_BITS: { [key: string]: number } = {
  'FP16': 16,
  'Q8': 8,
  'Q6': 6,
  'Q5': 5,
  'Q4': 4,
  'Q3': 3,
  'Q2': 2,
};

const CONTEXT_OVERHEAD: { [key: string]: number } = {
  '2K': 0.5,
  '4K': 1.5,
  '8K': 2.5,
  '16K': 4,
  '32K': 6,
  '128K': 12,
};

const BATCH_MULTIPLIER: { [key: string]: number } = {
  '1': 0,
  '2': 0.5,
  '4': 1.5,
  '8': 3,
};

export function VramCalculator() {
  const [modelSize, setModelSize] = useState<string>('13B');
  const [quantization, setQuantization] = useState<string>('Q4');
  const [contextLength, setContextLength] = useState<string>('4K');
  const [batchSize, setBatchSize] = useState<string>('1');
  const [useCase, setUseCase] = useState<string>('single');
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  // Load from URL params on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const params = new URLSearchParams(window.location.search);
    const urlModel = params.get('model');
    const urlQuant = params.get('quant');
    const urlContext = params.get('context');
    const urlBatch = params.get('batch');

    if (urlModel && Object.keys(MODEL_SIZES).includes(urlModel)) {
      setModelSize(urlModel);
    }
    if (urlQuant && Object.keys(QUANT_BITS).includes(urlQuant)) {
      setQuantization(urlQuant);
    }
    if (urlContext && Object.keys(CONTEXT_OVERHEAD).includes(urlContext)) {
      setContextLength(urlContext);
    }
    if (urlBatch && Object.keys(BATCH_MULTIPLIER).includes(urlBatch)) {
      setBatchSize(urlBatch);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = () => {
      setActiveTooltip(null);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const calculations = useMemo(() => {
    const modelBillions = MODEL_SIZES[modelSize] || 13;
    const quantBits = QUANT_BITS[quantization] || 4;
    const contextOH = CONTEXT_OVERHEAD[contextLength] || 1.5;
    const batchOH = BATCH_MULTIPLIER[batchSize] || 0;

    const baseVram = (modelBillions * quantBits) / 8;
    const contextVram = contextOH;
    const batchVram = batchOH;
    const systemVram = 1;

    const totalRequired = baseVram + contextVram + batchVram + systemVram;
    const withSafety = Math.ceil(totalRequired * 1.25 * 4) / 4; // Round up to nearest 0.25

    return {
      baseVram: baseVram.toFixed(2),
      contextVram: contextVram.toFixed(2),
      batchVram: batchVram.toFixed(2),
      systemVram: systemVram.toFixed(2),
      totalRequired: totalRequired.toFixed(2),
      withSafety: withSafety.toFixed(2),
    };
  }, [modelSize, quantization, contextLength, batchSize]);

  const getGpuFit = (requiredVram: number, gpuVram: number) => {
    const headroom = gpuVram - requiredVram;
    if (headroom < 0) return { status: '❌ Exceeds', color: 'bg-red-50', text: 'text-red-700' };
    if (headroom < 1) return { status: '⚠️ Tight', color: 'bg-yellow-50', text: 'text-yellow-700' };
    return { status: '✅ Fits', color: 'bg-green-50', text: 'text-green-700' };
  };

  const required = parseFloat(calculations.withSafety);

  const LabelWithInfo = ({ name, tooltipKey }: { name: string; tooltipKey: string }) => (
    <div className="flex items-center gap-1">
      <label className="text-sm font-semibold text-slate-700">{name}</label>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setActiveTooltip(activeTooltip === tooltipKey ? null : tooltipKey);
        }}
        className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600 hover:text-slate-700 text-xs font-bold cursor-help transition-colors"
        title="Click for more info"
      >
        ℹ
      </button>
    </div>
  );

  const applyPreset = (preset: Preset) => {
    setModelSize(preset.modelSize);
    setQuantization(preset.quantization);
    setContextLength(preset.contextLength);
    setBatchSize(preset.batchSize);
  };

  return (
    <div className="space-y-6 bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-lg border border-slate-200">
      {/* Preset Buttons */}
      <div className="space-y-2">
        <p className="text-xs font-semibold text-slate-600 uppercase">Popular Models</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {PRESETS.map((preset) => (
            <button
              key={preset.name}
              onClick={() => applyPreset(preset)}
              className="px-3 py-2 bg-white hover:bg-purple-50 border border-slate-300 hover:border-purple-400 rounded-md text-sm font-medium text-slate-700 hover:text-purple-700 transition-colors"
            >
              {preset.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 relative">
        {/* Model Size */}
        <div>
          <div className="block mb-2">
            <LabelWithInfo name="Model Size" tooltipKey="modelSize" />
          </div>
          {activeTooltip === 'modelSize' && (
            <div className="absolute top-12 left-0 z-50 bg-slate-900 text-white p-3 rounded-lg shadow-lg max-w-xs text-xs">
              <p className="font-semibold mb-1">{TOOLTIPS.modelSize.title}</p>
              <p>{TOOLTIPS.modelSize.description}</p>
              <div className="absolute -top-1 left-6 w-2 h-2 bg-slate-900 rotate-45"></div>
            </div>
          )}
          <select
            value={modelSize}
            onChange={(e) => setModelSize(e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-md bg-white text-slate-900 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            {Object.keys(MODEL_SIZES).map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>

        {/* Quantization */}
        <div>
          <div className="block mb-2">
            <LabelWithInfo name="Quantization" tooltipKey="quantization" />
          </div>
          {activeTooltip === 'quantization' && (
            <div className="absolute top-12 left-80 z-50 bg-slate-900 text-white p-3 rounded-lg shadow-lg max-w-xs text-xs">
              <p className="font-semibold mb-1">{TOOLTIPS.quantization.title}</p>
              <p>{TOOLTIPS.quantization.description}</p>
              <div className="absolute -top-1 left-6 w-2 h-2 bg-slate-900 rotate-45"></div>
            </div>
          )}
          <select
            value={quantization}
            onChange={(e) => setQuantization(e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-md bg-white text-slate-900 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            {Object.keys(QUANT_BITS).map((quant) => (
              <option key={quant} value={quant}>{quant}</option>
            ))}
          </select>
        </div>

        {/* Context Length */}
        <div>
          <div className="block mb-2">
            <LabelWithInfo name="Context" tooltipKey="context" />
          </div>
          {activeTooltip === 'context' && (
            <div className="absolute top-12 left-96 z-50 bg-slate-900 text-white p-3 rounded-lg shadow-lg max-w-xs text-xs">
              <p className="font-semibold mb-1">{TOOLTIPS.context.title}</p>
              <p>{TOOLTIPS.context.description}</p>
              <div className="absolute -top-1 left-6 w-2 h-2 bg-slate-900 rotate-45"></div>
            </div>
          )}
          <select
            value={contextLength}
            onChange={(e) => setContextLength(e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-md bg-white text-slate-900 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            {Object.keys(CONTEXT_OVERHEAD).map((ctx) => (
              <option key={ctx} value={ctx}>{ctx}</option>
            ))}
          </select>
        </div>

        {/* Batch Size */}
        <div>
          <div className="block mb-2">
            <LabelWithInfo name="Batch Size" tooltipKey="batchSize" />
          </div>
          {activeTooltip === 'batchSize' && (
            <div className="absolute top-12 left-1/2 z-50 bg-slate-900 text-white p-3 rounded-lg shadow-lg max-w-xs text-xs">
              <p className="font-semibold mb-1">{TOOLTIPS.batchSize.title}</p>
              <p>{TOOLTIPS.batchSize.description}</p>
              <div className="absolute -top-1 left-6 w-2 h-2 bg-slate-900 rotate-45"></div>
            </div>
          )}
          <select
            value={batchSize}
            onChange={(e) => setBatchSize(e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-md bg-white text-slate-900 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            {Object.keys(BATCH_MULTIPLIER).map((batch) => (
              <option key={batch} value={batch}>{batch}</option>
            ))}
          </select>
        </div>

        {/* Use Case */}
        <div>
          <div className="block mb-2">
            <LabelWithInfo name="Use Case" tooltipKey="useCase" />
          </div>
          {activeTooltip === 'useCase' && (
            <div className="absolute top-12 right-0 z-50 bg-slate-900 text-white p-3 rounded-lg shadow-lg max-w-xs text-xs">
              <p className="font-semibold mb-1">{TOOLTIPS.useCase.title}</p>
              <p>{TOOLTIPS.useCase.description}</p>
              <div className="absolute -top-1 left-6 w-2 h-2 bg-slate-900 rotate-45"></div>
            </div>
          )}
          <select
            value={useCase}
            onChange={(e) => setUseCase(e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-md bg-white text-slate-900 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="single">Single-user chat</option>
            <option value="multi">Multi-user API</option>
            <option value="batch">Batch processing</option>
          </select>
        </div>
      </div>

      {/* Results */}
      <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="border-l-4 border-blue-400 pl-4">
            <p className="text-xs font-semibold text-slate-600 uppercase">Base Model</p>
            <p className="text-xl font-bold text-slate-900">{calculations.baseVram} GB</p>
          </div>
          <div className="border-l-4 border-purple-400 pl-4">
            <p className="text-xs font-semibold text-slate-600 uppercase">Context OH</p>
            <p className="text-xl font-bold text-slate-900">{calculations.contextVram} GB</p>
          </div>
          <div className="border-l-4 border-orange-400 pl-4">
            <p className="text-xs font-semibold text-slate-600 uppercase">Batch OH</p>
            <p className="text-xl font-bold text-slate-900">{calculations.batchVram} GB</p>
          </div>
          <div className="border-l-4 border-gray-400 pl-4">
            <p className="text-xs font-semibold text-slate-600 uppercase">System OH</p>
            <p className="text-xl font-bold text-slate-900">{calculations.systemVram} GB</p>
          </div>
          <div className="border-l-4 border-red-400 pl-4 md:col-span-2">
            <p className="text-xs font-semibold text-slate-600 uppercase">Total Minimum</p>
            <p className="text-xl font-bold text-slate-900">{calculations.totalRequired} GB</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-300 rounded-lg p-4">
          <p className="text-xs font-semibold text-slate-600 uppercase mb-1">Recommended (with 25% safety margin)</p>
          <p className="text-2xl font-bold text-purple-700">{calculations.withSafety} GB</p>
          <p className="text-xs text-slate-600 mt-2">👉 Look for a GPU with at least {calculations.withSafety} GB VRAM</p>
        </div>
      </div>

      {/* GPU Compatibility */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-slate-800">Compatible GPUs</h3>
        <div className="space-y-2">
          {GPUS.map((gpu) => {
            const fit = getGpuFit(required, gpu.vram);
            return (
              <div key={gpu.name} className={`${fit.color} border border-slate-200 rounded-lg p-3 flex items-center justify-between`}>
                <div>
                  <p className={`font-semibold ${fit.text}`}>{gpu.name} ({gpu.vram} GB)</p>
                  <p className="text-xs text-slate-600">
                    {gpu.vram >= required ? `${(gpu.vram - required).toFixed(1)} GB headroom` : `Short by ${(required - gpu.vram).toFixed(1)} GB`}
                  </p>
                </div>
                <span className="text-lg font-bold">{fit.status}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tips */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 text-sm text-slate-700 space-y-1">
        <p className="font-semibold text-blue-900">💡 Pro Tips:</p>
        <ul className="list-disc list-inside space-y-1 text-xs">
          <li>Always use the "with safety margin" figure when buying a GPU</li>
          <li>Q4 gives 90-95% quality with 25% size reduction. Q5 is better if you have room</li>
          <li>Context overhead grows with conversation length. Budget 1-3 GB for typical usage</li>
          <li>Batch size matters for multi-user APIs. Single-user chat can ignore batch overhead</li>
        </ul>
      </div>

      {/* URL Share Feature */}
      <div className="text-xs text-slate-500 pt-4 border-t border-slate-200">
        <p className="font-semibold text-slate-700 mb-2">📋 Share this configuration:</p>
        <div className="bg-slate-50 p-3 rounded border border-slate-200 font-mono text-xs break-all">
          {typeof window !== 'undefined'
            ? `${window.location.origin}${window.location.pathname}${generateShareUrl(modelSize, quantization, contextLength, batchSize)}`
            : 'Loading...'}
        </div>
      </div>
    </div>
  );
}

function generateShareUrl(modelSize: string, quantization: string, contextLength: string, batchSize: string) {
  const params = new URLSearchParams({
    model: modelSize,
    quant: quantization,
    context: contextLength,
    batch: batchSize,
  });
  return `?${params.toString()}`;
}
