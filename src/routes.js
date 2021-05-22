import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { MessagesPage } from './pages/MessagesPage'
import { MusicPage } from './pages/MusicPage'
import { NewsPage } from './pages/NewsPage'
import { ProfilePage } from './pages/ProfilePage'
import { SettingsPage } from './pages/SettingsPage'

export const useRoutes = () => {
  return (
    <Switch>
      <Route path="/profile" component={ProfilePage} />
      <Route path="/messages" component={MessagesPage} />
      <Route path="/news" component={NewsPage} />
      <Route path="/music" component={MusicPage} />
      <Route path="/settings" component={SettingsPage} />
      <Redirect to="/profile" />
    </Switch>
  )
}
