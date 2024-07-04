import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Consultant from "./routes/consultant";
import ClientList from "./routes/client_list";
import Contract from "./routes/contract";

import './App.css';


// ここでルーティング設定をする
// path: URLのパス element: 呼び出し先モジュール（routes/***.jsの中のfunctionを2-4行目でimportして指定している）
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Navigate to="/conslutant" />} />
          <Route path='/conslutant' element={<Consultant />} />
          <Route path='/clientlist' element={<ClientList />} />
          <Route path='/contract' element={<Contract />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
