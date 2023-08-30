import React from "react";
import { Button, Form, Input, Select, Upload } from "antd";
import { CameraOutlined } from "@ant-design/icons";

const { TextArea } = Input;
const { Option } = Select;
const PublicarProducto = () => {
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  const [form] = Form.useForm();
  //   const [componentDisabled] = useState(false);
  //   console.log(componentDisabled);

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+57</Option>
        <Option value="87">+1</Option>
      </Select>
    </Form.Item>
  );

  return (
    
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ["zhejiang", "hangzhou", "xihu"],
        prefix: "86",
      }}
      style={{
        maxWidth: 600,
      }}
      scrollToFirstError
    >
      <Form.Item
        name="brand"
        label="Brand"
        rules={[
          {
            type: "string",
            message: "The input is not valid",
          },
          {
            required: true,
            message: "Please input your brand",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="contact number"
        label="Contact number (+57)"
        rules={[
          {
            type: "string",
          },
          {
            required: true,
            message: "Please input your contact number!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="title of products"
        label="Title of products"
        // disabled={componentDisabled}
        rules={[
          {
            type: "string",
            message: "The input is not valid",
          },
          {
            required: true,
            message: "Please input a title of products",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="description "
        label="Description"
        // tooltip="Id propio o de la empresa"
        rules={[
          {
            required: true,
            message: "Please input a description!",
            whitespace: true,
          },
        ]}
      >
        <TextArea rows={4} />
      </Form.Item>
      <h1>Set a price</h1>
      <Form.Item
        name="price"
        label="Price"
        rules={[
          {
            type: "string",
            message: "The input is not valid",
          },
          {
            required: true,
            message: "Please input a price!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <h2>Upload up to 10 photos</h2>

      <Form.Item label="Upload" valuePropName="fileList">
        <Upload action="/upload.do" listType="picture-card">
          <div>
            <CameraOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
          </div>
        </Upload>
      </Form.Item>

      <h2>Check your details</h2>

      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            type: "string",
            message: "The input is not valid",
          },
          {
            required: true,
            message: "Please input a name!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="phone_number"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: "100%",
          }}
        />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};
export default PublicarProducto;
