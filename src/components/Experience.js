import React from "react";
import { Button, Form, Input, Space, InputNumber, DatePicker } from "antd";
import { Col, Row } from "antd";
const Experience = ({ handleNext, setExperience }) => {
  const { RangePicker } = DatePicker;
  const [form] = Form.useForm();
  const onFinish = (values) => {
    // console.log("Received values of form:", values);
    setExperience([values]);
    handleNext();
  };

  return (
    <>
      <div style={{ maxWidth: "800px", margin: "10px auto" }}>
        <h1>Experience Details</h1>

        <div className="div-container">
          <Form
            form={form}
            name="validateOnly"
            layout="vertical"
            autoComplete="off"
            onFinish={onFinish}
          >
            <div className="edu-details-container">
              <h1>Company Details</h1>
              <Row gutter={22}>
                <Col span={10}>
                  {" "}
                  <Form.Item
                    name="companyname"
                    label="Company Name"
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
                    name="role"
                    label="Role"
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
                  <Form.Item name="location" label="location"  rules={[
                    {
                      required: true,
                    },
                  ]}>
                    <Input />
                  </Form.Item>
                </Col>

                <Col span={10}>
                  {" "}
                  <Form.Item
                    name="experience"
                    label="Experience"
                    rules={[
                      {
                          required: true,
                        type: "number",
                        min: 0,
                        max: 20,
                      },
                    ]}
                  >
                    <InputNumber />
                  </Form.Item>
                </Col>
              </Row>
            </div>
            <div className="edu-details-container">
              <h1>Skills</h1>
              <Row gutter={22}>
                <Col span={10}>
                  {" "}
                  <Form.Item
                    name="skill_1"
                    label="Skill 1"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input placeholder="skill 1" />
                  </Form.Item>
                </Col>
                <Col span={10}>
                  {" "}
                  <Form.Item
                    name="skill_2"
                    label="Skill 2"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input placeholder="skill 2" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={22}>
                <Col span={10}>
                  {" "}
                  <Form.Item name="skill_3" label="Skill 3"  rules={[
                      {
                        required: true,
                      },
                    ]}>
                    <Input placeholder="skill 3" />
                  </Form.Item>
                </Col>
                <Col span={10}>
                  {" "}
                  <Form.Item name="skill_4" label="Skill 4"  rules={[
                      {
                        required: true,
                      },
                    ]}>
                    <Input placeholder="skill 4" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={22}>
                <Col span={10}>
                  {" "}
                  <Form.Item name="skill_5" label="Skill 5"  rules={[
                      {
                        required: true,
                      },
                    ]}>
                    <Input placeholder="skill 5" />
                  </Form.Item>
                </Col>
                <Col span={10}>
                  {" "}
                  <Form.Item name="skill_6" label="Skill 6"  rules={[
                      {
                        required: true,
                      },
                    ]}>
                    <Input placeholder="skill 6" />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item style={{ textAlign: "right" }}>
                <Space>
                  <Button htmlType="submit" type="primary">
                    Next
                  </Button>
                </Space>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Experience;
