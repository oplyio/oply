/*
Copyright 2020 Oply

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

\thttp://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import { Action, action } from 'store/actions'
import { initializeClient } from 'api'
import { AboutServiceClient } from 'api/system/AboutServiceClientPb'
import { AboutRequest } from 'api/system/about_pb'

export interface AboutState {
    loading: boolean,
    version: string,
}

const initialState: AboutState = {
    loading: false,
    version: '',
}

export const aboutReducer = (state = initialState, {type, payload}: Action) => {
    switch(type) {
        case 'about.loading':
            return { ...state, loading: payload }
        case 'about.fetched':
            return {
                ...state,
                version: payload.version,
            }
        default:
            return state
        }
}

export const fetch = () => (dispatch: any) => {
    dispatch(action('about.loading', true))

    const client: AboutServiceClient  = initializeClient(AboutServiceClient)
    client.about(new AboutRequest(), null)
        .then(info => {
            dispatch(action('about.fetched', {
                version: info.getVersion(),
            }))
            return info
        })
        .finally(() => { dispatch(action('about.loading', false)) });
}