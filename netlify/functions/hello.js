export default async (req, context) => {
  // const { next_run } = await fetch('http://localhost:8888/api/hehe')

  console.log('呼叫了api！！呼叫了！！呼叫了！！呼叫了！！來了:',next_run);

};
export const config = {
  schedule: "* * * * *"
}