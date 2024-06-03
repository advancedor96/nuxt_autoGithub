export default async (req, context) => {
  const data = await fetch('/api/hehe')

  console.log('呼叫了api！！呼叫了！！呼叫了！！呼叫了！！來了:');

};
export const config = {
  schedule: "* * * * *"
}