import React, { useEffect, useState } from 'react'

const CreateFixedTermDepositHooks = () => {

  const [userAccountAmount, setUserAccoutAmount] = useState(0);

  useEffect(() => {
    setUserAccoutAmount(5000) // Here we have to fetch the user data. It's not implemented yet.
  }, [])

  return { userAccountAmount }
}

export default CreateFixedTermDepositHooks
