import React from 'react';
import { Select, Space } from 'antd';

const Securquestion = (props) => {

    return(

        

    <Space wrap>
        <Select
          defaultValue="Please select"
          style={{ width: 400 }}
          onChange={Securquestion}
          options={[
            { value: 'Select', label: 'Please select', disabled: true },
            { value: 'question1', label: 'What is your grandmother’s name?' },
            { value: 'question2', label: 'What is your grandfather’s name?' },
            { value: 'question3', label: 'What is your birthday? (Ex:1980/01/01' },
            { value: 'question4', label: 'What is your mother’s maiden name?' },
            { value: 'question5', label: 'What is your father’s maiden name?' },
            { value: 'question6', label: 'What is your pet´s name?' },
            { value: 'question7', label: 'What is your hometown' },
            { value: 'question8', label: 'What is your primary school’s name?'},
          ]}
        />

        
      

    </Space>

    );

};
  export default Securquestion

