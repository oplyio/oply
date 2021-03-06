/*
Copyright 2020 Oply

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import React, { useEffect } from 'react'
import { State, creators } from 'store'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from 'components/shared/Spinner'

const Main = () => {
  const dispatch = useDispatch()

  const loading = useSelector((state: State) => state.about.loading)
  const version = useSelector((state: State) => state.about.version)

  useEffect(() => {
    dispatch(creators.fetchAbout())
  }, [dispatch])

  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-gray-900">
      <h2 className="font-bold text-3xl mb-2 text-blue-200">Oply</h2>
      <p className="italic text-center text-gray-400">
        Version: { loading && <Spinner size="15" className="ml-2" /> } { version } <br />
        API at: { process.env.REACT_APP_API_URL }
      </p>
    </div>
  );
}

export default Main;
