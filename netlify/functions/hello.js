export default async (req, context) => {
  console.log(getCurrentFormattedDateTime() + '準備呼叫api....');
  
  const data = await fetch('https://cheatongithub.netlify.app/api/hehe')

  console.log('完成。\n\n');

};

function getCurrentFormattedDateTime() {
  const now = new Date();

  const month = String(now.getMonth() + 1).padStart(2, '0'); // getMonth() 從 0 開始，所以需要加 1
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  const formattedDateTime = `${month}/${day} ${hours}:${minutes}`;
  return formattedDateTime;
}


export const config = {
  schedule: "01 22 * * *"
}