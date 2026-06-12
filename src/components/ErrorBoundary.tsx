import { Component, type ErrorInfo, type ReactNode } from 'react'

type Props = { children: ReactNode; fallback?: ReactNode }

type State = { hasError: boolean }

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.warn('[ErrorBoundary] Error capturado:', error.message, info.componentStack)
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="flex items-center justify-center py-16 text-center">
            <div className="glass-strong rounded-2xl p-8">
              <p className="text-sm text-[var(--color-text-muted)]">
                Esta sección no pudo cargarse.{' '}
                <button
                  type="button"
                  onClick={() => this.setState({ hasError: false })}
                  className="text-[var(--color-trust)] underline underline-offset-2 hover:text-[var(--color-trust-dim)]"
                >
                  Reintentar
                </button>
              </p>
            </div>
          </div>
        )
      )
    }

    return this.props.children
  }
}
