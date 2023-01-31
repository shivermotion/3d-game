import React from "react"
import { Route, Routes } from "react-router-dom"


// Application Screen || App State
// =================================================================================================
// =================================================================================================
import { MSTContext } from "@MSTContext"
import { IAuthStore } from "@MSTInterfaces"
import { observer } from "mobx-react-lite"


// Application Navigator || App Imports
// =================================================================================================
// ================================================================================================='
import { AppLayout } from "@src/routing-app/app-layout/AppLayout"
import { StartScreen } from "@src/routing-app/app-screen-start/StartScreen"
import { AppAboutScreen } from "@src/routing-app/app-screen-about/AboutScreen"
import { GameScreen } from "@src/routing-app/app-screen-game/GameScreen"


// Application Navigator || Auth Imports
// =================================================================================================
// =================================================================================================
import { AuthLayout } from "@src/routing-auth/auth-layout/AuthLayout"
import { AuthLoginScreen } from "@src/routing-auth/auth-screen-login/LoginScreen"
import { AuthLogoutScreen } from "@src/routing-auth/auth-screen-logout/LogoutScreen"
import { AuthRegisterScreen } from "@src/routing-auth/auth-screen-register/RegisterScreen"


// Application Navigator || Portal Imports
// =================================================================================================
// =================================================================================================
import { PortalLayout } from "@src/routing-portal/portal-layout/PortalLayout"
import { PortalDashboardScreen } from "@src/routing-portal/portal-screen-dashboard/DashboardScreen"
import { PortalSettingsScreen } from "@src/routing-portal/portal-screen-settings/SettingsScreen"
import { PortalProfileScreen } from "@src/routing-portal/portal-screen-profile/ProfileScreen"


// Application Navigator || Define Exports
// =================================================================================================
// =================================================================================================
// The Mobx `observer()` is used to reload the authentication wrapper for the 2 route types ========
export const NavigationRoot = observer(() => {
  const AuthStore: IAuthStore = MSTContext().AuthStore

  return (
    <div className="wrapper">
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<StartScreen />} />
          <Route path={"/*"} element={<StartScreen />} />
          <Route path="/game" element={<GameScreen />} />
        </Route>
      </Routes>

    </div>
  )
})
