import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { MessagesPage } from './pages/DialogsPage'
import { MusicPage } from './pages/MusicPage'
import { NewsPage } from './pages/NewsPage'
import { ProfilePage } from './pages/ProfilePage'
import { SettingsPage } from './pages/SettingsPage'

export const useRoutes = (props) => {
  return (
    <Switch>
      <Route path="/profile">
        <ProfilePage
          state={props.state.profilePage}
          addPost={props.addPost}
          changeNewPostText={props.changeNewPostText}
        />
      </Route>
      <Route path="/dialogs" component={MessagesPage} />
      <Route path="/news" component={NewsPage} />
      <Route path="/music" component={MusicPage} />
      <Route path="/settings" component={SettingsPage} />
      {/* <Redirect to="/profile" /> */}
    </Switch>
  )
}
