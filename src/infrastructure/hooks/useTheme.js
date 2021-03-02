import { Border } from '../theme/border'
import { Color, Background } from '../theme/color'
import { Flex } from '../theme/flex'
import { fontFamily, fontSize, fontStyle } from '../theme/fonts'
import { Height } from '../theme/height'
import { Margin } from '../theme/margin'
import { Opacity } from '../theme/opacity'
import { Padding } from '../theme/padding'
import { Position } from '../theme/position'
import { Shadows } from '../theme/shadows'
import { Text } from '../theme/text'
import { Width } from '../theme/width'
import { zIndex } from '../theme/zIndex'
import { useHeaderHeight } from '@react-navigation/stack'

const useTheme = () => {
  const headerHeight = useHeaderHeight()

  return {
    Padding,
    Margin,
    Flex,
    Border,
    Color,
    fontFamily,
    fontSize,
    fontStyle,
    Height,
    Width,
    Opacity,
    Position,
    Shadows,
    Text,
    zIndex,
    headerHeight,
    Background,
  }
}

export default useTheme
