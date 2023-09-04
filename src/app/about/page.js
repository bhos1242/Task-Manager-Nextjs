import { resolve } from "styled-jsx/css";

async function TakeTime() {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
}

const page = async () => {
  await TakeTime();
  return <div>This is about page</div>;
};

export default page;
