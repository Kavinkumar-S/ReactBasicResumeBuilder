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
const Profile = ({ handleNext, setProfile }) => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    // console.log("Received values of form:", values);
    setProfile([values]);
    handleNext();
  };
  
  return (
    <>
      <div style={{ maxWidth: "800px", margin: "10px auto" }}>
        <h1>Basic Details</h1>

        <div className="div-container">
          <Form
            form={form}
            name="validateOnly"
            layout="vertical"
            autoComplete="off"
            onFinish={onFinish}
          >
            <Row gutter={22}>
              <Col span={10}>
                {" "}
                <Form.Item
                  name="name"
                  label="Name"
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
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    {
                      required: true,
                      type: "email",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={22}>
              <Col span={10}>
                {" "}
                <Form.Item
                  name="gender"
                  label="Gender"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Select defaultValue="select">
                    <Select.Option value="male">Male</Select.Option>
                    <Select.Option value="female">Female</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={10}>
                <Form.Item
                  name="dateofbirth"
                  label="D.O.B"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
               >
                  <DatePicker />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={22}>
              <Col span={10}>
                <Form.Item
                  name="age"
                  label="Age"
                  rules={[
                    {
                      type: "number",
                      min: 0,
                      max: 99,
                      required: true,
                    },
                  ]}
                >
                  <InputNumber />
                </Form.Item>
              </Col>
              <Col span={10}>
                <Form.Item
                  name="mobilenumber"
                  label="Mobile Number"
                  rules={[
                    {
                      pattern: /^(?:\d*)$/,
                      message: "Value should contain just number",
                    },
                    {
                      pattern: /^[\d]{0,10}$/,
                      message: "Value should be less than 10 numbers",

                    },{
                      required: true
                    }
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={22}>
              <Col span={10}>
                {" "}
                <Form.Item
                  name="city"
                  label="City"
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
                  name="country"
                  label="Country"
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

            <Form.Item style={{ textAlign: "right" }}>
              <Space>
                {/* <SubmitButton form={form} /> */}
                <Button htmlType="submit" type="primary">
                  Next
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Profile;
