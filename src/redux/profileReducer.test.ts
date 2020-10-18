import profileReducer, {addPost, deletePost, InitialProfileState} from "./profileReducer";

let initialState: InitialProfileState;

beforeEach(()=>{
     initialState = {
        profileInfo: {
            userId: 1, lookingForAJob: true,
            lookingForAJobDescription: "yes im looking",
            fullName: "MISHA MARODI", contacts: {
                github: "gitHub",
                vk: 'vk',
                facebook: 'facebook',
                instagram: 'instagram',
                twitter: 'twitter',
                website: 'website',
                youtube: 'youtube',
                mainLink: 'mainLink'
            },
            aboutMe: "aboutMe",
            photos: {
                large: "large",
                small: 'small'
            }
        },
        status: 'Its test status',
        post: [
            {id: '1', message: 'Hi, how are you?', likesCount: 5},
            {id: '2', message: 'I love React.js', likesCount: 300},
        ],
        isFetching: false,
    }
})




test('Array of posts should be increment', ()=>{

    let action = addPost('New Post text')

    let newState = profileReducer(initialState, action)

    expect(newState.post.length).toBe(3)
})

test('new post text should be correct ', ()=>{

    let action = addPost('New Post text')

    let newState = profileReducer(initialState, action)

    expect(newState.post[2].message).toBe('New Post text')
})

test('Array of posts should be decrement', ()=>{
    let action = deletePost("2")
    let  newState = profileReducer(initialState, action)
    expect(newState.post.length).toBe(1)
})
