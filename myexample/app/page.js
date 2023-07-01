
export default function Home() {
  console.log('Hello World')
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Hello World</h1>
      <Saludar />
    </main>
  )
}
function Saludar() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Hola Mundo</h1>
    </main>
  )
}
