export interface IPost {
  title: string
  text: string
  tags: string
  autor: string
  img: string
  img_2x: string
  date: string
  views: string
}

// export interface ServerResponse<T> {
//   results: T[]
// }

// Define general type for useWindowSize hook, which includes width and height
export interface Size {
  width: number | undefined
  // height: number | undefined
  SCREEN_SM: boolean
}
