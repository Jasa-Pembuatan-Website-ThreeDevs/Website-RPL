/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useCallback } from 'react';
import { authApi, setToken, setUser, getStoredUser } from '../lib/api';
import { useToast } from './ToastContext';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUserState] = useState(getStoredUser);
  const [loading] = useState(false);
  const { push } = useToast();

  const login = useCallback(async (email, password) => {
    const data = await authApi.login({ email, password });
    setToken(data.token);
    setUser(data.user);
    setUserState(data.user);
    push('Login berhasil.', { type: 'success' });
    return data.user;
  }, [push]);

  const register = useCallback(async (payload) => {
    const data = await authApi.register(payload);
    setToken(data.token);
    setUser(data.user);
    setUserState(data.user);
    return data.user;
  }, []);

  const logout = useCallback(async () => {
    try {
      await authApi.logout();
    } catch {
      /* token may already be invalid */
    }
    setToken(null);
    setUser(null);
    setUserState(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
