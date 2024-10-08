import { SiJordan } from 'react-icons/si'
import { HiMiniBars3CenterLeft } from 'react-icons/hi2'
import { Popover, Avatar, ConfigProvider, message, Button } from 'antd'
import { UserOutlined, InboxOutlined } from '@ant-design/icons'
import { SiNike } from 'react-icons/si'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import MenuNav from './Menu'
import NavRight from './NavRight'
import { useDispatch, useSelector } from 'react-redux'
import { getUserByID, setUser } from '../../features/auth'
import io from 'socket.io-client'
import AllNotification from '../Admin/Notification/AllNotification'
import React, { useEffect, useState } from 'react'
import { Drawer } from 'antd'
import { AppDispatch } from '../../redux/store'
import { blankCart, getCartItems } from '../../features/cart'
const NavBar = () => {
  const [open, setOpen] = useState(false)
  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }
  const content = (
    <div>
      <Link to="/signin">
        <h1 className="font-bold">Đăng nhập</h1>
      </Link>
      {/*<p>Logout</p>*/}
    </div>
  )
  const user = useSelector((state: any) => state.auth.user)
  const dispatch = useDispatch()
  const handleLogout = () => {
    localStorage.clear()
    dispatch(setUser(null))
    dispatch(blankCart())
    message.success('Logout successfully')
    const socket = io('http://localhost:9000', { transports: ['websocket'] })
    socket.emit('log_out', { userId: user._id })
  }

  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              horizontalItemSelectedColor: 'black',
            },
          },
        }}
      >
        <div className={clsx('fixed z-50 w-full')}>
          <div className="flex  justify-between px-6 sm:px-16  py-4 bg-[#f5f5f5]">
            <Link to={'/'}>
              <SiJordan size={28} className="hover:opacity-70" />
            </Link>
            <div className="flex gap-3 cursor-pointer ">
              {user?.role === 'member' && (
                <Popover
                  className="hover:opacity-70 hidden mt-[6px] lg:block"
                  content={<AllNotification />}
                  trigger="click"
                  title="Hộp thư của bạn"
                >
                  <InboxOutlined />
                </Popover>
              )}
              <span className="hidden lg:block">|</span>
              <Link to={'/help'}>
                <Popover className="hover:opacity-70 hidden lg:block" title="">
                  Hỗ trợ
                </Popover>
              </Link>
              <span className="hidden lg:block">|</span>
              {user ? (
                <Popover
                  className="flex gap-2 hover:opacity-70  "
                  content={
                    <>
                      <Link to="/profile">
                        <h1 className="font-bold">Hồ sơ</h1>
                      </Link>
                      {user?.role === 'admin' && (
                        <Link to="/admin">
                          <h1 className="font-bold">Quản trị viên</h1>
                        </Link>
                      )}
                      <Link to="">
                        <h1 className="font-bold" onClick={handleLogout}>
                          Đăng xuất
                        </h1>
                      </Link>
                    </>
                  }
                  title="Tài khoản"
                >
                  <p className="hidden lg:block">Hi, {user.userName}</p>
                  <Avatar
                    className=""
                    size={30}
                    icon={<UserOutlined />}
                    src={user?.avt?.url}
                  />
                  {/*<Button onClick={handleLogout}>Logout</Button>*/}
                </Popover>
              ) : (
                <Popover
                  className="flex gap-2 hover:opacity-70"
                  content={content}
                  title="Tài khoản"
                >
                  <Avatar size={30} icon={<UserOutlined />} />
                </Popover>
              )}
              <HiMiniBars3CenterLeft
                onClick={showDrawer}
                className="text-2xl mt-1 lg:hidden"
              />
            </div>
          </div>

          <div className={clsx('flex  bg-white w-full justify-around z-50')}>
            <Link to={'/'}>
              <SiNike className="hover:opacity-75" size={50} />
            </Link>
            <MenuNav></MenuNav>
            <NavRight></NavRight>
          </div>
          <Drawer
            title={` ${user?.userName ? `Hi ${user?.userName}` : ''} `}
            onClose={onClose}
            open={open}
          >
            <div className="flex flex-col gap-16">
              <div className="flex flex-col gap-6 mt-5 ml-10 justify-start">
                <Link onClick={onClose} className="text-3xl" to={'/greaup'}>
                  Sản phẩm
                </Link>
                <Link onClick={onClose} className="text-3xl" to={'/men'}>
                  Nam
                </Link>
                <Link onClick={onClose} className="text-3xl" to={'/women'}>
                  Nữ
                </Link>
                <Link onClick={onClose} className="text-3xl" to={'/sale'}>
                  Giảm giá
                </Link>
                <Link onClick={onClose} className="text-3xl" to={'/contact'}>
                  Liên hệ
                </Link>
                <Link onClick={onClose} className="text-3xl" to={'/membership'}>
                  Thành viên
                </Link>
                <Link onClick={onClose} className="text-3xl" to={'/help'}>
                  Hỗ trợ
                </Link>
              </div>
            </div>
          </Drawer>
        </div>

        {/* <div className="flex justify-center mt-20 items-center flex-col bg-[#f5f5f5]">
          <h2>Move, Shop, Customise & Celebrate With Us.</h2>
          <p>
            No matter what you feel like doing today, It’s better as a Member.
          </p>
          <a href="">Join us</a>
        </div> */}
      </ConfigProvider>
    </>
  )
}

export default NavBar
