import { Outlet } from 'react-router-dom'

import { BgHeader } from '../../components/BgHeader'
import { LayoutContent } from './styles'

export function AppLayout() {
  return (
    <>
      <BgHeader />
      <LayoutContent>
        <main>
          <Outlet />
        </main>
      </LayoutContent>
    </>
  )
}
