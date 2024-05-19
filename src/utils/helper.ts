export const convertToCamelCase = (inputString: string) => {
  // Remove leading numbers, symbols, and hyphens
  if (!inputString) {
    return ''
  }
  let cleanedString = inputString
    .replace(/^[^a-zA-Z_]+/, '')
    .replace(/[^a-zA-Z0-9_]+/g, '')

  // Split the string into words
  const words = cleanedString.split(/[\s-_]+/)

  // Capitalize the first letter of each word and join with underscores
  const camelCaseString = words
    .map((word, index) => {
      return index === 0
        ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })
    .join('_')

  return camelCaseString
}

export const getImageData = (
  image: HTMLImageElement,
  canvas: HTMLCanvasElement
) => {
  const newSize = 800

  // Set canvas dimensions
  canvas.width = newSize
  canvas.height = newSize

  const context = canvas.getContext('2d')

  // Calculate scaling factor
  const scaleFactor = newSize / image.width

  // Calculate destination width and height
  const newWidth = image.width * scaleFactor
  const newHeight = image.height * scaleFactor

  // Calculate offsets to center the image
  const offsetX = (newSize - newWidth) / 2
  const offsetY = (newSize - newHeight) / 2

  // Clear canvas and draw the image with calculated dimensions
  context?.clearRect(0, 0, newSize, newSize)
  context?.drawImage(image, offsetX, offsetY, newWidth, newHeight)

  return {
    imageData: context?.getImageData(0, 0, newSize, newSize),
    canvas,
    context
  }
}

// Load image from the view
export const loadImage = async (
  src: string,
  img: HTMLImageElement
): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    img.crossOrigin = 'anonymous'
    img.onload = () => resolve(img)
    img.onerror = () => {
      const error = new Error(`Error loading image from ${src}`)
      reject(error)
    }
    img.src = src
  })
}

// Encode image to object to upload on figma
export async function encodeImage(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  imageData: ImageData
): Promise<Uint8Array> {
  ctx.putImageData(imageData, 0, 0)

  return await new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      const reader = new FileReader()
      reader.onload = () =>
        resolve(new Uint8Array(reader.result as ArrayBuffer))
      reader.onerror = () => reject(new Error('Could not read from blob'))
      blob && reader.readAsArrayBuffer(blob)
    })
  })
}

export const unit8toPng = (imgData: Uint8Array | string) => {
  const blob = new Blob([imgData], { type: 'image/png' })
  const dataUrl = URL.createObjectURL(blob)
  return dataUrl
}

export const svgBase64 = (svg: string) => {
  var base64 = btoa(svg)
  return `data:image/svg+xml;base64,${base64}`
}
