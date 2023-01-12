import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { SearchContainer } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionsContext } from '../../../contexts/TransactionsContexts'
import { useContextSelector } from 'use-context-selector'

/**
 * Why a component is render
 * - Hooks changed
 * - Props changed
 * - Parent rerendered
 *
 * What is the renderization flow
 * 1. React create HTML interface component
 * 2. Compare step 1 with the previous HTML version
 * 3. If something changed it is update and the new HTML is shown
 *
 * Memo:
 * 0. Hooks changed, props changed (deep comparison)
 * 0.1 Compare the previous Hooks and props vesion
 * 0.2 If something changed it will allow the new renderization.
 */

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const fetchtransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.fetchtransactions
    },
  )
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchtransactions(data.query)
  }

  return (
    <SearchContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Transactions Search"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Search
      </button>
    </SearchContainer>
  )
}
