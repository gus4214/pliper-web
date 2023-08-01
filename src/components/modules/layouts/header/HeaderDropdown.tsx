import React from 'react';
import { Menu, Transition } from '@headlessui/react';

const HeaderDropdown = () => {
	return (
		<>
			<Menu as='div' className='relative inline-block text-left'>
				<div>
					<Menu.Button className='w-6 h-6 bg-gradient-to-b from-blue-400 to-emerald-200 rounded-full'></Menu.Button>
				</div>

				<Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
					<div className='px-1 py-1'>
						<Menu.Item>
							{({ active }) => (
								<button
									className={`${
										active ? 'bg-slate-700 text-white' : 'text-gray-900'
									} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
								>
									개인 스페이스
								</button>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<button
									className={`${
										active ? 'bg-slate-700 text-white' : 'text-gray-900'
									} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
								>
									플립 만들기
								</button>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<button
									className={`${
										active ? 'bg-slate-700 text-white' : 'text-gray-900'
									} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
								>
									My PLIP
								</button>
							)}
						</Menu.Item>
					</div>
					<div className='px-1 py-1'>
						<Menu.Item>
							{({ active }) => (
								<button
									className={`${
										active ? 'bg-slate-700 text-white' : 'text-gray-900'
									} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
								>
									로그아웃
								</button>
							)}
						</Menu.Item>
					</div>
				</Menu.Items>
			</Menu>
		</>
	);
};

export default HeaderDropdown;
