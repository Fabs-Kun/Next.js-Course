import ImageSlider from "@/components/ImageSlider";
import { serverSideFunction } from "@/utils/server-utils";

export default function ServerRoutePage() {
    console.log("Server route rendered");
    const result = serverSideFunction();
  return (
    <>
        <h1>Server Side Page</h1>
        <ImageSlider />
        {/* <p>{result}</p> */}
    </>
  )
}
