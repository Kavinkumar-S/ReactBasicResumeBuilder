import React from "react";
import {
    Button,
    Form,
    Input,
    Space,
    InputNumber,
    Select,
    DatePicker,
    Upload,
  } from "antd";
  
  import { Col, Row } from "antd";
  import { PlusOutlined } from "@ant-design/icons";

const Education=({handleNext,setEducation})=>{
    const { RangePicker } = DatePicker;
    const [form] = Form.useForm();
  const onFinish = (values) => {
    // console.log("Received values of form:", values);
    setEducation([values]);
    handleNext();
  };

  
  
  return(<>
   
   <div style={{ maxWidth: "800px", margin: "10px auto" }}>
        <h1>Education Details</h1>

        <div className="div-container">
          <Form
            form={form}
            name="validateOnly"
            layout="vertical"
            autoComplete="off"
            onFinish={onFinish}
          >
  <div className="edu-details-container">


     <h1>
        College Details
     </h1>
            <Row gutter={22}>
              <Col span={10}>
                {" "}
                <Form.Item
                  name="collegename"
                  label="College Name"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={10}>
                {" "}
                <Form.Item
                  name="degree"
                  label="Degree"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
           
           
            </Row>
            <Row gutter={22}>
            <Col span={10}>
                <Form.Item
                  name="cgpa"
                  label="CGPA"
                  rules={[
                    {
                      required: true,
                      type: "number",
                      min: 0,
                      max: 10,
                    },
                  ]}
                >
                   <InputNumber />
                </Form.Item>
              </Col>

              <Col span={10}>
                {" "}
                <Form.Item
                  name="year"
                  label="Year"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                 <RangePicker picker="year" />
                </Form.Item>
              </Col>
            </Row>      
            </div>
            <div className="edu-details-container"> 


<h1>
   Higher Secondary Details
</h1>
       <Row gutter={22}>
         <Col span={10}>
           {" "}
           <Form.Item
             name="schoolname"
             label="School Name"
             rules={[
               {
                 required: true,
               },
             ]}
           >
             <Input />
           </Form.Item>
         </Col>
         <Col span={10}>
           {" "}
           <Form.Item
             name="group"
             label="Group"
             rules={[
               {
                 required: true,
               },
             ]}
           >
             <Input />
           </Form.Item>
         </Col>
      
      
       </Row>
       <Row gutter={22}>
       <Col span={10}>
           <Form.Item
             name="percent"
             label="Percentage"
             rules={[
               {
                 required: true,
                 type: "number",
                 min: 0,
                 max: 100,
               },
             ]}
           >
              <InputNumber />
           </Form.Item>
         </Col>

         <Col span={10}>
           {" "}
           <Form.Item
             name="schoolyear"
             label="School Year"
             rules={[
              {
                required: true,
              },
            ]}
             
           >
            <RangePicker picker="year" />
           </Form.Item>
         </Col>
       </Row>

       <Form.Item style={{ textAlign: "right" }}>
         <Space>
           {/* <SubmitButton form={form} /> */}
           <Button htmlType="submit" type="primary">
             Next
           </Button>
         </Space>
       </Form.Item>
  
       </div>
          </Form>
        </div>
      </div>
       </>)
}

export default Education;