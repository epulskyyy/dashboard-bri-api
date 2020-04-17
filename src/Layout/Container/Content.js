import React from 'react';
import './Content.css';
import Row from '../../Components/Grid/Row';
import Col from '../../Components/Grid/Col';
export default function Content() {
  return (
    <main className="main">
      <div className="content">
        <Row class="row">
          <Col class="column-3">asda</Col>
          <Col class="column-3">asda</Col>
          <Col class="column-6">asda</Col>
          <Col class="column-6">asda</Col>
        </Row>
      </div>
    </main>
  );
}
