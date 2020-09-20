import React, { Component } from 'react';
import styled from 'styled-components';
import { blueGradient, darkBlue } from './utils/constants';
import Button from './components/Button';
import SearchForm from './components/SearchForm';
import CreateForm from './components/CreateForm';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 40px 0;
  background-image: ${blueGradient};
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 380px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  position: relative;
  background-color: #fff;
  margin-bottom: 30px;
  overflow: hidden;
`;

const Form = styled.div`
  width: 200%;
  height: ${({toggle}) => toggle ? '335px' : '155px'};
  overflow-y: hidden;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  transform: ${({toggle}) => toggle ? `translateX(0%)` : `translateX(-50%)`};
  transition: all 1s;
  margin-bottom: 20px;
`;

const FormColumn = styled.div`
  padding: 15px;
  min-height: 50px;
`;

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formToggle: true
    }
  }

  render() {
    const { formToggle } = this.state;
    const searchMssg = 'Need to find an account?';
    const addMssg = 'Do you want to add an account?';

    return (
      <Wrapper>
        <FormWrapper>
          <Form toggle={formToggle}>
            <FormColumn>
              <CreateForm />
            </FormColumn>
            <FormColumn>
              <SearchForm />
            </FormColumn>
          </Form>
          <Button 
            link={formToggle ? true : false}
            center
            fontSize="18px"
            bgColor={darkBlue}
            color="#fff"
            value={formToggle ? searchMssg : addMssg}
            onClick={() => this.setState({ formToggle: !formToggle })}
          />
        </FormWrapper>
      </Wrapper>
    )
  }
}

export default App;
