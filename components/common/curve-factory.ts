import {
  curveBasis,
  curveBasisClosed,
  curveBasisOpen,
  curveBundle, curveCardinal,
  curveCardinalClosed,
  curveCardinalOpen,
  curveCatmullRom, curveCatmullRomClosed,
  curveCatmullRomOpen,
  curveLinear,
  curveLinearClosed, curveMonotoneX, curveMonotoneY,
  curveNatural,
  curveStep, curveStepAfter,
  curveStepBefore
} from "d3-shape";

export const Curves = {

  BASIS: curveBasis,

  BASISCLOSED: curveBasisClosed,

  BASISOPEN: curveBasisOpen,

  BUNDLE: curveBundle,

  CARDINAL: curveCardinal,

  CARDINALCLOSED: curveCardinalClosed,

  CARDINALOPEN: curveCardinalOpen,

  CATMULLROM: curveCatmullRom,

  CATMULLROMCLOSED: curveCatmullRomClosed,

  CATMULLROMOPEN: curveCatmullRomOpen,

  LINEAR: curveLinear,

  LINEARCLOSED: curveLinearClosed,

  MONOTONE: curveMonotoneX,

  MONOTONEX: curveMonotoneX,

  MONOTONEY: curveMonotoneY,

  NATURAL: curveNatural,

  STEP: curveStep,

  STEPAFTER: curveStepAfter,

  STEPBEFORE: curveStepBefore

}
