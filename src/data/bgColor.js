import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"
import img5 from "../assets/img5.png"
import img6 from "../assets/img6.png"
import img7 from "../assets/img7.png"

export const getColorByWeatherId = (weatherId) => {
  if (!weatherId) return img5

  // 800: 맑음
  if (weatherId === 800) {
    return img5
  }

  // 801 ~ 804: 구름
  if (weatherId >= 801 && weatherId <= 804) {
    return img7
  }

  const group = Math.floor(weatherId / 100)

  switch (group) {
    case 2:
      // 뇌우
      return img4

    case 3:
      // 이슬비
      return img1

    case 5:
      // 비
      return img3

    case 6:
      // 눈
      return img2

    case 7:
      // 안개 / 먼지
      return img6

    default:
      return img5
  }
}