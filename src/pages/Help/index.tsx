import {
  EnvironmentOutlined,
  MessageOutlined,
  MobileOutlined,
  SearchOutlined,
} from '@ant-design/icons'
import { Button, Form, Input, Space, Typography } from 'antd'
import { Link } from 'react-router-dom'

const { Title } = Typography

const Help = () => {
  return (
    <div className="px-20">
      <Space style={{ display: 'flex', justifyContent: 'center' }}>
        <Typography style={{ fontSize: '33px' }} className="home_title">
          Hỗ trợ
        </Typography>
      </Space>

      <Form
        className="mx-auto mb-0 max-w-md space-y-4"
        name="form_item_path"
        layout="vertical"
        autoComplete="off"
      >
        <Form.Item className="text-black font-bold">
          <Input
            className="font-medium border h-12 focus:border-blue-500"
            style={{
              borderColor: 'gray',
              fontSize: '17px',
              borderRadius: '10px',
            }}
            placeholder="Chúng tôi có thể giúp gì cho bạn?"
            suffix={
              <Button
                className="rounded-full btn-primary-dark btn-md"
                htmlType="submit"
                style={{
                  border: 'none',
                  fontSize: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  marginLeft: 'auto',
                }}
              >
                <SearchOutlined />
              </Button>
            }
          />
        </Form.Item>
      </Form>

      <Space direction="vertical" className="mt-20 mb-5">
        <Title level={3}>Hỗ trợ nhanh</Title>
        <p style={{ fontSize: '17px', fontWeight: 500 }}>
          Câu trả lời cho những câu hỏi thường gặp nhất của chúng tôi chỉ cần một cú nhấp chuột.
        </p>
      </Space>
      <hr />
      <Space
        direction="vertical"
        className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:grid-cols-3"
      >
        <Space direction="vertical">
          <Title level={4}>Vận chuyển và giao hàng</Title>
          <Link to="/help/a/free-shipping">
            Làm cách nào để được giao hàng miễn phí cho các đơn hàng của Nike?
          </Link>
          <Link to="">Các lựa chọn giao hàng của Nike là gì?</Link>
          <a href="">Đơn hàng Nike của tôi có thể được gửi đi quốc tế không?</a>
        </Space>
        <Space direction="vertical">
          <Title level={4}>Trả hàng</Title>
          <a href="">Làm cách nào để trả lại đơn hàng Nike của tôi?</a>
          <a href="">Chính sách hoàn trả của Nike là gì?</a>
          <a href="">Where is my refund?</a>
        </Space>
        <Space direction="vertical">
          <Title level={4}>Tư cách thành viên NIKE</Title>
          <a href="">Tư cách thành viên Nike là gì?</a>
          <a href="">Làm cách nào để trở thành Thành viên Nike?</a>
          <a href="">Làm cách nào để tận dụng tối đa NRC và NTC?</a>
        </Space>
      </Space>

      <Space direction="vertical" className="mt-20 mb-5">
        <Title level={3}>Liên hệ chúng tôi</Title>
      </Space>
      <hr />
      <Space
        direction="vertical"
        className="mt-10 mb-5 grid grid-cols-2 gap-7 lg:grid-cols-3"
      >
        <Space direction="vertical">
          <MobileOutlined style={{ fontSize: '40px' }} />
          <Title level={5} className="mt-3">
            Sản phẩm & đơn đặt hàng
          </Title>
          <a href="">12280903 (Viettel)</a>
          <a href="">12032487 (VTI)</a>
          <a href="">05:00 - 23-00</a>
          <a href="">7 days a week</a>
        </Space>
        <Space direction="vertical" style={{ textAlign: 'center' }}>
          <MessageOutlined style={{ fontSize: '40px' }} />
          <Title level={5} className="mt-3">
            Liên hệ với chúng tôi
          </Title>
          <a href="">Nhắn tin cho chúng tôi</a>
          <a href="">24 giờ một ngày</a>
          <a href="">7 ngày trên tuần</a>
        </Space>
        <Space direction="vertical">
          <EnvironmentOutlined style={{ fontSize: '40px' }} />
          <Title level={5} className="mt-3">
            Địa chỉ
          </Title>
          <a href="">
            FPT Polytechnic Building, 13 Trinh Van Bo Ward, <br />
            Xuan Phuong, Nam Tu Liem, Hanoi
          </a>
        </Space>
      </Space>
    </div>
  )
}

export default Help
