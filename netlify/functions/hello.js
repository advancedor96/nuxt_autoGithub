export default async (req, context) => {
  const data = await fetch('https://cheatongithub.netlify.app/api/hehe')

  console.log('呼叫了api : https://cheatongithub.netlify.app/api/hehe');

};
export const config = {
  schedule: "* * * * *"
}