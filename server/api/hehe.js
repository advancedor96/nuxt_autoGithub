
const owner = process.env.OWNER;
const repo = process.env.REPO;
const path = process.env.GPATH;
const token = process.env.GTOKEN;

const getContentsUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
console.log('讀到環境變數:',getContentsUrl);

const CommitIt = async ()=>{
  
  try {
    const response = await $fetch(getContentsUrl, {
      method: 'get', 
      headers: { 
          'Authorization': `token ${token}`
      }});
    
    const content = Buffer.from(response.content, 'base64').toString('utf-8');
    
    const sha = response.sha;
    const numbers = content.split(',')
      .map(s => s.match(/\d+/g) ? parseInt(s.match(/\d+/g)[0], 10) : NaN)
      .filter(n => !isNaN(n));

    const lastNumber = numbers.length ? numbers[numbers.length - 1] : 0;
    const newContent = `${content}\n${lastNumber + 1}(+),`;
    // console.log('新內容:',newContent);
    
    const encodedContent = Buffer.from(newContent).toString('base64');
    let date_ob = new Date();
    const commitMsg = `${date_ob.getMonth() + 1}/${date_ob.getDate()}`;
    const updateResponse = await $fetch(getContentsUrl, {
      method: 'put',
      body: {
        message: commitMsg,
        content: encodedContent,
        sha: sha,
      },
      headers: {
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json'
      }
    });
  } catch (err) {
    throw err;
  }

}

export default defineEventHandler(async (event) => {
  console.log('進入 /hehe');
  const numbers = [1, 2];

  const randomIndex = Math.floor(Math.random() * numbers.length);
  const total_fake_time = numbers[randomIndex];
  try {
    for(let i=0;i<total_fake_time;i++){
      await CommitIt();
    }
  } catch (error) {
    console.log('error',error);
  }

  return {'number': total_fake_time};
})

