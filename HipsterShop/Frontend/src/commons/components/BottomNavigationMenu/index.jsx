import React from 'react'
import { Link } from "react-router";
import { MdLogout, MdLogin } from 'react-icons/md'
import Button from '../Button'
import useAppearanceStore from '@/commons/appearance/store'
import { useAuth } from '@/commons/auth'
import Icon from '../Icon'
import Modal from '../Modal'

const BottomNavigationMenu = (props) => {
	const { isAuthenticated, logout, checkPermission } = useAuth();
	const { colorTheme } = useAppearanceStore()

	const handleLogout = () => {
		logout()
		setIsShowModal(false)
	}

	const [isShowModal, setIsShowModal] = React.useState(false)
	return <div data-theme={colorTheme} className="fixed bottom-0 bg-primary left-0 
	right-0 p-4 pt-3 pb-3 flex justify-around max-w-md mx-auto">
	{isAuthenticated ?
	<Link className='no-underline flex flex-col items-center' onClick={() => setIsShowModal(true)}>
		<MdLogout className="w-8 h-8 mb-1" color='white' />
		<span className="text-white text-xs">Keluar</span>
	</Link>
	:
	<Link to='/mobile/login?homeUrl=/mobileinvalid' className='no-underline flex flex-col items-center'>
		<MdLogin className="w-8 h-8 mb-1" color='white' />
		<span className="text-white text-xs">Masuk</span>
	</Link>
	}
	<Modal isShow={isShowModal} text='Apakah anda yakin ingin keluar?' >
		<div className="flex justify-around gap-4">
			<Button onClick={() => handleLogout()} variant='primary'>Ya</Button>
			<Button onClick={() => setIsShowModal(false)} variant='secondary'>Tidak</Button>
		</div>
	</Modal>
	</div>
}

export default BottomNavigationMenu
