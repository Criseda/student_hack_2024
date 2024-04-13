import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

async function getBody(name : string){
  const body = await pb.collection('bodies').getFirstListItem(`name="${name}"`);
  return body;
}

export default async function Body({ params }: { params: { name: string } }) {
  const body = await getBody(params.name);
  return (
    <div>
      <p>{body.name}</p>
      <br />
      <p>{body.description}</p>
      <br />
      <p>{body.info}</p>
    </div>
  );
};