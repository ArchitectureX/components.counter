import cx from '@architecturex/utils.cx'

export const styles = {
  wrapper: 'h-10 flex items-center',
  container: 'flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1',
  decrement: 'bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none',
  dash: 'm-auto text-2xl font-thin',
  input: 'focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-base cursor-default flex items-center text-gray-700 outline-none',
  increment: 'bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer',
  add: 'm-auto text-2xl font-thin',
  span: 'ml-2'
}

export const tailwindClasses = cx.extract(styles)
