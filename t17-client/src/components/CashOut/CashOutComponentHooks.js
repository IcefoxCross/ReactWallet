import React, { useEffect, useState } from 'react'

const CashOutComponentHooks = () => {
  const [userAccountAmount, setUserAccountAmount] = useState(0);

  useEffect(() => {
    setUserAccountAmount(5000) // To do: Get real acccount amount. Services not available
  }, [])

  return { userAccountAmount }
}

export default CashOutComponentHooks
