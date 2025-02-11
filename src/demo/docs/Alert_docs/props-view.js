import React from 'react'

const PropsView = () => {
  return (
    <div className="app-table-view-container">
    <table className="app-table-view">
      <thead>
        <tr className="app-table-tr">
          <th className="" align="left">Prop</th>
          <th className="" align="left">Type</th>
          <th className="" align="left">Default</th>
          <th className="" align="left">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><p className="app-code">title</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's the alert title</td>
        </tr>
        <tr>
          <td><p className="app-code">message</p></td>
          <td>string</td>
          <td>null</td>
          <td>Set's the alert message</td>
        </tr>
        <tr>
          <td><p className="app-code">isVisible</p></td>
          <td>boolean</td>
          <td>false</td>
          <td>Set's the alert visiblity</td>
        </tr>
        <tr>
          <td><p className="app-code">onBackdropPress</p></td>
          <td>function</td>
          <td>undefined</td>
          <td>Callback on backdrop press</td>
        </tr>
        <tr>
          <td><p className="app-code">setTheme</p></td>
          <td>'default' | 'system'</td>
          <td>'default'</td>
          <td>Set's the alert theme</td>
        </tr>
        <tr>
          <td><p className="app-code">children</p></td>
          <td>ReactNode</td>
          <td>null</td>
          <td>Set's the alert children</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default PropsView