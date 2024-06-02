// export default async (req) => {
//   const { next_run } = await req.json()

//   console.log("Received event! Next invocation at:", next_run)
// }

exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello, World" })
  };
};