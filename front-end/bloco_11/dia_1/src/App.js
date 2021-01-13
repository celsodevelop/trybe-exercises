const task = (value) => <li key={parseInt((Math.random() * 100).toFixed(2),10)}>{value}</li>

const taskList = [
  'Terminar exercícios React',
  'Começar a fazer caminhadas',
  'Tirar a música do Tommy Emmanuel(Fuel) no violão',
  'Concluir com êxito a Trybe estando empregado'
]

function App() {
  return (
    <ul>{taskList.map((taskItem) => task(taskItem))}</ul>
  );
}

export default App;
