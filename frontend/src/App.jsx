import { useState } from 'react';
import './App.css';

function App() {
  const [technologiesError, setTechnologiesError] = useState(false);
  const [levelError, setLevelError] = useState(false);
  const [goalError, setGoalError] = useState(false);
  const [technologies, setTechnologies] = useState('');
  const [level, setLevel] = useState('');
  const [goal, setGoal] = useState('');
  const [spec, setSpec] = useState('');

  const generateSpec = () => {
    
    if (!technologies) {
      setTechnologiesError(true);
      setSpec('');
      return;
    }

    if (!goal) {
      setGoalError(true);
      setSpec('');
      return;
    }

    if (!level) {
      setLevelError(true);
      setSpec('');
      return;
    }

    setTechnologiesError(false);
    setLevelError(false);
    setGoalError(false);

    const text = `Com base nas informações fornecidas, o projeto ideal para o objetivo "${goal}" seria uma aplicação utilizando ${technologies}, voltado para um desenvolvedor ${level}. A especificação será detalhada conforme o objetivo.`;
    setSpec(text);
  };

  return (
    <>
      <div className="header-container">
        <h1>DevSpec.AI</h1>
        <div className="line"></div>
      </div>

      <div className="container">
        <label className={technologiesError ? 'error' : ''}>Tecnologias a aplicar</label>
        <input
          type="text"
          value={technologies}
          onChange={(e) => setTechnologies(e.target.value)}
          placeholder="Ex: API com Java e Redis"
        />

        <label className={goalError ? 'error' : ''}>Objetivo profissional</label>
        <input
          type="text"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder="Ex: Vaga para dev Java Júnior em fintech"
        />

        <label className={levelError ? 'error' : ''}>Nível profissional</label>
        <select value={level} onChange={(e) => setLevel(e.target.value)}>
          <option value="">Selecione</option>
          <option value="1">Júnior</option>
          <option value="2">Pleno</option>
          <option value="3">Sênior</option>
        </select>

        <button onClick={generateSpec}>Gerar Especificações de projeto</button>

        {spec && (
          <div className="result">
            <h2>Especificação</h2>
            <p>{spec}</p>
          </div>
        )}

        <footer>
          <p>⚠️ Projeto estudantil — este serviço pode estar indisponível em alguns momentos.</p>
        </footer>
      </div>
    </>
  );
}

export default App;