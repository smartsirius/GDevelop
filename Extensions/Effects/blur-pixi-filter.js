gdjs.PixiFiltersTools.registerFilterCreator('Blur', {
  makePIXIFilter: function(layer, effectData) {
    var blur = new PIXI.filters.BlurFilter();
    return blur;
  },
  update: function(filter, layer) {},
  updateDoubleParameter: function(filter, parameterName, value) {
    if (
      parameterName !== 'blur' &&
      parameterName !== 'quality' &&
      parameterName !== 'kernelSize' &&
      parameterName !== 'resolution'
    )
      return;

    if (parameterName === 'kernelSize') {
      value = gdjs.PixiFiltersTools.clampKernelSize(value);
    }

    filter[parameterName] = value;
  },
  updateStringParameter: function(filter, parameterName, value) {},
});