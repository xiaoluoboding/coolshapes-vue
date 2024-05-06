// icon base props
type SVGProps = Partial<SVGSVGElement>

export interface ShapeProps extends SVGProps {
  size?: number
  noise?: boolean
}

export interface BaseProps extends ShapeProps {
  shapeName: string
}

export type ShapeType = ShapeProps
