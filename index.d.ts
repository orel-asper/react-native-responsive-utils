declare module 'react-native' {
  export interface ScaledSize {
    width: number;
    height: number;
    scale: number;
    fontScale: number;
  }

  export namespace Dimensions {
    function get(name: 'window' | 'screen'): ScaledSize;
    function set(dims: Partial<ScaledSize>): void;
    function addEventListener(
      type: 'change',
      handler: ({ window, screen }: { window: ScaledSize; screen: ScaledSize }) => void
    ): void;
    function removeEventListener(
      type: 'change',
      handler: ({ window, screen }: { window: ScaledSize; screen: ScaledSize }) => void
    ): void;
  }
}

export declare function convertWidthToPixel(widthPercent: string | number): number;
export declare function convertHeightToPixel(heightPercent: string | number): number;
export declare function getScreenOrientation(screenWidth: number, screenHeight: number): 'portrait' | 'landscape';
export declare function addOrientationChangeListener(
  callback: (orientation: 'portrait' | 'landscape') => void
): () => void;
export declare function calculateResponsiveFontSize(baseFontSize: number): number;
export declare function calculateResponsiveSpacing(baseSpacing: number): number;
