const bubbelBathDev = 'https://api.joinbubbel.com';export interface BubbelCodegenOut {
    t0?:  InCreateUser;
    t1?:  ResCreateUser;
    t10?: InSetUserProfile;
    t11?: ResSetUserProfile;
    t12?: InGetUserProfile;
    t13?: ResGetUserProfile;
    t14?: InDeleteUser;
    t15?: ResDeleteUser;
    t16?: InCreateClub;
    t17?: ResCreateClub;
    t18?: InGetClubProfile;
    t19?: ResGetClubProfile;
    t2?:  InAuthUser;
    t20?: InSetClubProfile;
    t21?: ResSetClubProfile;
    t22?: InDeleteClub;
    t23?: ResDeleteClub;
    t24?: InGetUserProfileWithUsername;
    t25?: ResGetUserProfileWithUsername;
    t26?: InAddFriendConnection;
    t27?: ResAddFriendConnection;
    t28?: InGetFriendConnections;
    t29?: ResGetFriendConnections;
    t3?:  ResAuthUser;
    t30?: InRemoveFriend;
    t31?: ResRemoveFriend;
    t32?: InJoinClub;
    t33?: ResJoinClub;
    t34?: InUnjoinClub;
    t35?: ResUnjoinClub;
    t36?: InGetClubMembers;
    t37?: ResGetClubMembers;
    t38?: InGetUserClubs;
    t39?: ResGetUserClubs;
    t4?:  InDeauthUser;
    t40?: InRegexSearchClubs;
    t41?: ResRegexSearchClubs;
    t42?: InRegexSearchUsers;
    t43?: ResRegexSearchUsers;
    t44?: InGetRandomClubs;
    t45?: ResGetRandomClubs;
    t46?: InCheckToken;
    t47?: ResCheckToken;
    t48?: InUnsafeAddFile;
    t49?: ResUnsafeAddFile;
    t5?:  ResDeauthUser;
    t50?: InGetDataChannelChunk;
    t51?: ResGetDataChannelChunk;
    t52?: InGetClubProfileWithName;
    t53?: ResGetClubProfileWithName;
    t54?: InGetRandomUsers;
    t55?: ResGetRandomUsers;
    t56?: InUsernameToID;
    t57?: ResUsernameToID;
    t58?: InCreateMessageRoom;
    t59?: ResCreateMessageRoom;
    t6?:  InVerifyAccount;
    t60?: InGetMessageRoom;
    t61?: ResGetMessageRoom;
    t62?: InJoinMessageRoom;
    t63?: ResJoinMessageRoom;
    t64?: InGetClubMessageRooms;
    t65?: ResGetClubMessageRooms;
    t66?: InGetMessageRoomMembers;
    t67?: ResGetMessageRoomMembers;
    t68?: InUploadBase64;
    t69?: ResUploadBase64;
    t7?:  ResVerifyAccount;
    t70?: DataChannelInitRequest;
    t71?: DataChannelInitResponse;
    t72?: DataChannelRequest;
    t73?: DataChannelResponse;
    t8?:  InSendVerify;
    t9?:  ResSendVerify;
    [property: string]: any;
}

export interface InCreateUser {
    email:    string;
    password: string;
    username: string;
    [property: string]: any;
}

export interface ResCreateUser {
    error?: null | CreateUserError;
    res?:   null | CreateUserOut;
    [property: string]: any;
}

/**
 * Email is not valid by backend standards.
 *
 * Username is not valid by backend standards.
 *
 * Password is not valid by backend standards.
 *
 * Got an error from a cryptography function. This error should never occur.
 *
 * Email or Username already taken.
 */
export interface CreateUserError {
    type:    PurpleType;
    ierror?: string;
    [property: string]: any;
}

export enum PurpleType {
    EmailOrUsernameTaken = "EmailOrUsernameTaken",
    Internal = "Internal",
    InvalidEmail = "InvalidEmail",
    InvalidPassword = "InvalidPassword",
    InvalidPasswordCryto = "InvalidPasswordCryto",
    InvalidUsername = "InvalidUsername",
}

export interface CreateUserOut {
    user_id: number;
    [property: string]: any;
}

export interface InSetUserProfile {
    banner?:       null | string;
    description?:  null | string;
    display_name?: null | string;
    name?:         null | string;
    pfp?:          null | string;
    token:         string;
    [property: string]: any;
}

export interface ResSetUserProfile {
    error?: null | SetUserProfileError;
    res?:   null;
    [property: string]: any;
}

export interface SetUserProfileError {
    type:    FluffyType;
    ierror?: string;
    [property: string]: any;
}

export enum FluffyType {
    Internal = "Internal",
    NoAuth = "NoAuth",
}

export interface InGetUserProfile {
    token?:  null | string;
    user_id: number;
    [property: string]: any;
}

export interface ResGetUserProfile {
    error?: null | GetUserProfileError;
    res?:   null | GetUserProfileOut;
    [property: string]: any;
}

export interface GetUserProfileError {
    type:    TentacledType;
    ierror?: string;
    [property: string]: any;
}

export enum TentacledType {
    Internal = "Internal",
    NoAuth = "NoAuth",
    UserNotFound = "UserNotFound",
}

export interface GetUserProfileOut {
    banner?:       null | string;
    description?:  null | string;
    display_name?: null | string;
    name?:         null | string;
    pfp?:          null | string;
    [property: string]: any;
}

export interface InDeleteUser {
    token: string;
    [property: string]: any;
}

export interface ResDeleteUser {
    error?: null | DeleteUserError;
    res?:   null;
    [property: string]: any;
}

export interface DeleteUserError {
    type:    FluffyType;
    ierror?: string;
    [property: string]: any;
}

export interface InCreateClub {
    name:  string;
    token: string;
    [property: string]: any;
}

export interface ResCreateClub {
    error?: null | CreateClubError;
    res?:   null | CreateClubOut;
    [property: string]: any;
}

export interface CreateClubError {
    type:    StickyType;
    ierror?: string;
    [property: string]: any;
}

export enum StickyType {
    ClubAlreadyExists = "ClubAlreadyExists",
    Internal = "Internal",
    NoAuth = "NoAuth",
}

export interface CreateClubOut {
    club_id: number;
    [property: string]: any;
}

export interface InGetClubProfile {
    club_id: number;
    token?:  null | string;
    [property: string]: any;
}

export interface ResGetClubProfile {
    error?: null | GetClubProfileError;
    res?:   null | GetClubProfileOut;
    [property: string]: any;
}

export interface GetClubProfileError {
    type:    IndigoType;
    ierror?: string;
    [property: string]: any;
}

export enum IndigoType {
    ClubNotFound = "ClubNotFound",
    Internal = "Internal",
    NoAuth = "NoAuth",
}

export interface GetClubProfileOut {
    banner?:       null | string;
    dc_id:         number;
    description?:  null | string;
    display_name?: null | string;
    is_member?:    boolean | null;
    name:          string;
    owner:         number;
    pfp?:          null | string;
    [property: string]: any;
}

export interface InAuthUser {
    password: string;
    username: string;
    [property: string]: any;
}

export interface InSetClubProfile {
    banner?:       null | string;
    club_id:       number;
    dc_id?:        number | null;
    description?:  null | string;
    display_name?: null | string;
    name?:         null | string;
    owner?:        number | null;
    pfp?:          null | string;
    token:         string;
    [property: string]: any;
}

export interface ResSetClubProfile {
    error?: null | SetClubProfileError;
    res?:   { [key: string]: any } | null;
    [property: string]: any;
}

/**
 * The user is not the owner and therefore is not authorized.
 */
export interface SetClubProfileError {
    type:    IndecentType;
    ierror?: string;
    [property: string]: any;
}

export enum IndecentType {
    ClubNotFound = "ClubNotFound",
    Internal = "Internal",
    NoAuth = "NoAuth",
    NoAuthOwner = "NoAuthOwner",
    SettingDCNotSupportedYet = "SettingDCNotSupportedYet",
    SettingNameNotSupportedYet = "SettingNameNotSupportedYet",
    SettingOwnerNotSupportedYet = "SettingOwnerNotSupportedYet",
}

export interface InDeleteClub {
    club_id: number;
    token:   string;
    [property: string]: any;
}

export interface ResDeleteClub {
    error?: null | DeleteClubError;
    res?:   null;
    [property: string]: any;
}

/**
 * The user is not the owner and therefore is not authorized.
 */
export interface DeleteClubError {
    type:    HilariousType;
    ierror?: string;
    [property: string]: any;
}

export enum HilariousType {
    ClubNotFound = "ClubNotFound",
    Internal = "Internal",
    NoAuth = "NoAuth",
    NoAuthOwner = "NoAuthOwner",
}

export interface InGetUserProfileWithUsername {
    token?:   null | string;
    username: string;
    [property: string]: any;
}

export interface ResGetUserProfileWithUsername {
    error?: null | GetUserProfileWithUsernameError;
    res?:   null | GetUserProfileWithUsernameOut;
    [property: string]: any;
}

export interface GetUserProfileWithUsernameError {
    type:    TentacledType;
    ierror?: string;
    [property: string]: any;
}

export interface GetUserProfileWithUsernameOut {
    banner?:       null | string;
    description?:  null | string;
    display_name?: null | string;
    name?:         null | string;
    pfp?:          null | string;
    [property: string]: any;
}

export interface InAddFriendConnection {
    receiver_id: number;
    token:       string;
    [property: string]: any;
}

export interface ResAddFriendConnection {
    error?: null | AddFriendConnectionError;
    res?:   { [key: string]: any } | null;
    [property: string]: any;
}

export interface AddFriendConnectionError {
    type:    AmbitiousType;
    ierror?: string;
    [property: string]: any;
}

export enum AmbitiousType {
    AlreadyConnected = "AlreadyConnected",
    CannotAddSelf = "CannotAddSelf",
    Internal = "Internal",
    NoAuth = "NoAuth",
}

export interface InGetFriendConnections {
    token: string;
    [property: string]: any;
}

export interface ResGetFriendConnections {
    error?: null | GetFriendConnectionsError;
    res?:   null | GetFriendConnectionsOut;
    [property: string]: any;
}

export interface GetFriendConnectionsError {
    type:    FluffyType;
    ierror?: string;
    [property: string]: any;
}

export interface GetFriendConnectionsOut {
    friend_connections: { [key: string]: FriendStatus };
    [property: string]: any;
}

export enum FriendStatus {
    Full = "Full",
    RecievedPending = "RecievedPending",
    SentPending = "SentPending",
}

export interface ResAuthUser {
    error?: null | AuthUserError;
    res?:   null | AuthUserOut;
    [property: string]: any;
}

/**
 * Got an error from a cryptography function. This error should never occur.
 */
export interface AuthUserError {
    type:     CunningType;
    user_id?: number;
    ierror?:  string;
    [property: string]: any;
}

export enum CunningType {
    Internal = "Internal",
    InvalidCredentials = "InvalidCredentials",
    InvalidPasswordCryto = "InvalidPasswordCryto",
    UserNotFound = "UserNotFound",
    UserNotVerified = "UserNotVerified",
}

export interface AuthUserOut {
    email:    string;
    token:    string;
    username: string;
    [property: string]: any;
}

export interface InRemoveFriend {
    removal_id: number;
    token:      string;
    [property: string]: any;
}

export interface ResRemoveFriend {
    error?: null | RemoveFriendError;
    res?:   { [key: string]: any } | null;
    [property: string]: any;
}

export interface RemoveFriendError {
    type:    FluffyType;
    ierror?: string;
    [property: string]: any;
}

export interface InJoinClub {
    club_id: number;
    token:   string;
    [property: string]: any;
}

export interface ResJoinClub {
    error?: null | JoinClubError;
    res?:   { [key: string]: any } | null;
    [property: string]: any;
}

export interface JoinClubError {
    type:    MagentaType;
    ierror?: string;
    [property: string]: any;
}

export enum MagentaType {
    AlreadyJoined = "AlreadyJoined",
    Internal = "Internal",
    NoAuth = "NoAuth",
}

export interface InUnjoinClub {
    club_id: number;
    token:   string;
    [property: string]: any;
}

export interface ResUnjoinClub {
    error?: null | UnjoinClubError;
    res?:   { [key: string]: any } | null;
    [property: string]: any;
}

export interface UnjoinClubError {
    type:    FriskyType;
    ierror?: string;
    [property: string]: any;
}

export enum FriskyType {
    CannotUnjoinAsOwner = "CannotUnjoinAsOwner",
    ClubNotFound = "ClubNotFound",
    Internal = "Internal",
    NoAuth = "NoAuth",
}

export interface InGetClubMembers {
    club_id: number;
    [property: string]: any;
}

export interface ResGetClubMembers {
    error?: null | GetClubMembersError;
    res?:   null | GetClubMembersOut;
    [property: string]: any;
}

export interface GetClubMembersError {
    ierror: string;
    type:   GetClubMembersErrorType;
    [property: string]: any;
}

export enum GetClubMembersErrorType {
    Internal = "Internal",
}

export interface GetClubMembersOut {
    users: number[];
    [property: string]: any;
}

export interface InGetUserClubs {
    user_id: number;
    [property: string]: any;
}

export interface ResGetUserClubs {
    error?: null | GetUserClubsError;
    res?:   null | GetUserClubsOut;
    [property: string]: any;
}

export interface GetUserClubsError {
    ierror: string;
    type:   GetClubMembersErrorType;
    [property: string]: any;
}

export interface GetUserClubsOut {
    clubs: number[];
    [property: string]: any;
}

export interface InDeauthUser {
    token: string;
    [property: string]: any;
}

export interface InRegexSearchClubs {
    batch_index: number;
    regex:       string;
    [property: string]: any;
}

export interface ResRegexSearchClubs {
    error?: null | RegexSearchClubsError;
    res?:   null | RegexSearchClubsOut;
    [property: string]: any;
}

export interface RegexSearchClubsError {
    type:    MischievousType;
    ierror?: string;
    [property: string]: any;
}

export enum MischievousType {
    Internal = "Internal",
    RegexLimit = "RegexLimit",
}

export interface RegexSearchClubsOut {
    clubs: Array<Array<number | string>>;
    [property: string]: any;
}

export interface InRegexSearchUsers {
    batch_index: number;
    regex:       string;
    [property: string]: any;
}

export interface ResRegexSearchUsers {
    error?: null | RegexSearchUsersError;
    res?:   null | RegexSearchUsersOut;
    [property: string]: any;
}

export interface RegexSearchUsersError {
    type:    MischievousType;
    ierror?: string;
    [property: string]: any;
}

export interface RegexSearchUsersOut {
    users: Array<Array<number | string>>;
    [property: string]: any;
}

export interface InGetRandomClubs {
    _ignore?: null;
    [property: string]: any;
}

export interface ResGetRandomClubs {
    error?: null | GetRandomClubsError;
    res?:   null | GetRandomClubsOut;
    [property: string]: any;
}

export interface GetRandomClubsError {
    ierror: string;
    type:   GetClubMembersErrorType;
    [property: string]: any;
}

export interface GetRandomClubsOut {
    clubs: Array<Array<number | ClubProfile>>;
    [property: string]: any;
}

export interface ClubProfile {
    banner?:       null | string;
    dc_id:         number;
    description?:  null | string;
    display_name?: null | string;
    name:          string;
    owner:         number;
    pfp?:          null | string;
    [property: string]: any;
}

export interface InCheckToken {
    token: string;
    [property: string]: any;
}

export interface ResCheckToken {
    error?: null | CheckTokenError;
    res?:   null | CheckTokenOut;
    [property: string]: any;
}

export interface CheckTokenError {
    type: CheckTokenErrorType;
    [property: string]: any;
}

export enum CheckTokenErrorType {
    Ignore = "Ignore",
}

export interface CheckTokenOut {
    user_id?: number | null;
    [property: string]: any;
}

export interface InUnsafeAddFile {
    data:      string;
    extension: string;
    [property: string]: any;
}

export interface ResUnsafeAddFile {
    error?: null | UnsafeAddFileError;
    res?:   null | UnsafeAddFileOut;
    [property: string]: any;
}

export interface UnsafeAddFileError {
    base64_error?: string;
    type:          BraggadociousType;
    ierror?:       string;
    [property: string]: any;
}

export enum BraggadociousType {
    Internal = "Internal",
    InvalidBase64 = "InvalidBase64",
}

export interface UnsafeAddFileOut {
    file_link: string;
    [property: string]: any;
}

export interface ResDeauthUser {
    error?: null;
    res?:   null;
    [property: string]: any;
}

export interface InGetDataChannelChunk {
    channel_id:  number;
    chunk_index: number;
    token:       string;
    [property: string]: any;
}

export interface ResGetDataChannelChunk {
    error?: null | GetDataChannelChunkError;
    res?:   null | GetDataChannelChunkOut;
    [property: string]: any;
}

export interface GetDataChannelChunkError {
    type:    Type1;
    ierror?: string;
    [property: string]: any;
}

export enum Type1 {
    ChannelNotFound = "ChannelNotFound",
    ChunkNotFound = "ChunkNotFound",
    Internal = "Internal",
    NoAuth = "NoAuth",
}

export interface GetDataChannelChunkOut {
    chunk: DataChunk;
    [property: string]: any;
}

export interface DataChunk {
    items: Array<null | DataChannelItem>;
    [property: string]: any;
}

export interface DataChannelItem {
    edit_time?: number | null;
    message:    Message;
    post_time:  number;
    sender:     number;
    [property: string]: any;
}

export interface Message {
    text: string;
    type: MessageType;
    [property: string]: any;
}

export enum MessageType {
    Text = "Text",
}

export interface InGetClubProfileWithName {
    name:   string;
    token?: null | string;
    [property: string]: any;
}

export interface ResGetClubProfileWithName {
    error?: null | GetClubProfileWithNameError;
    res?:   null | GetClubProfileWithNameOut;
    [property: string]: any;
}

export interface GetClubProfileWithNameError {
    type:    Type2;
    ierror?: string;
    [property: string]: any;
}

export enum Type2 {
    ClubNotFound = "ClubNotFound",
    Internal = "Internal",
}

export interface GetClubProfileWithNameOut {
    banner?:       null | string;
    dc_id:         number;
    description?:  null | string;
    display_name?: null | string;
    is_member?:    boolean | null;
    name:          string;
    owner:         number;
    pfp?:          null | string;
    [property: string]: any;
}

export interface InGetRandomUsers {
    _ignore?: null;
    [property: string]: any;
}

export interface ResGetRandomUsers {
    error?: null | GetRandomUsersError;
    res?:   null | GetRandomUsersOut;
    [property: string]: any;
}

export interface GetRandomUsersError {
    ierror: string;
    type:   GetClubMembersErrorType;
    [property: string]: any;
}

export interface GetRandomUsersOut {
    users: Array<Array<number | UserProfile>>;
    [property: string]: any;
}

export interface UserProfile {
    banner?:       null | string;
    description?:  null | string;
    display_name?: null | string;
    name?:         null | string;
    pfp?:          null | string;
    user_id:       number;
    [property: string]: any;
}

export interface InUsernameToID {
    username: string;
    [property: string]: any;
}

export interface ResUsernameToID {
    error?: null | UsernameToIDError;
    res?:   null | UsernameToIDOut;
    [property: string]: any;
}

export interface UsernameToIDError {
    type:    Type3;
    ierror?: string;
    [property: string]: any;
}

export enum Type3 {
    Internal = "Internal",
    UserNotFound = "UserNotFound",
}

export interface UsernameToIDOut {
    user_id: number;
    [property: string]: any;
}

export interface InCreateMessageRoom {
    club_id: number;
    name:    string;
    token:   string;
    [property: string]: any;
}

export interface ResCreateMessageRoom {
    error?: null | CreateMessageRoomError;
    res?:   null | CreateMessageRoomOut;
    [property: string]: any;
}

export interface CreateMessageRoomError {
    type:    Type4;
    ierror?: string;
    [property: string]: any;
}

export enum Type4 {
    ClubNotFound = "ClubNotFound",
    Internal = "Internal",
    NoAuth = "NoAuth",
    NotOwner = "NotOwner",
}

export interface CreateMessageRoomOut {
    message_room_id: number;
    [property: string]: any;
}

export interface InVerifyAccount {
    code: string;
    [property: string]: any;
}

export interface InGetMessageRoom {
    message_room_id: number;
    token:           string;
    [property: string]: any;
}

export interface ResGetMessageRoom {
    error?: null | GetMessageRoomError;
    res?:   null | GetMessageRoomOut;
    [property: string]: any;
}

export interface GetMessageRoomError {
    type:    Type5;
    ierror?: string;
    [property: string]: any;
}

export enum Type5 {
    Internal = "Internal",
    MessageRoomNotFound = "MessageRoomNotFound",
    NoAuth = "NoAuth",
    NotMessageRoomMember = "NotMessageRoomMember",
}

export interface GetMessageRoomOut {
    club_id: number;
    dc_id:   number;
    name?:   null | string;
    [property: string]: any;
}

export interface InJoinMessageRoom {
    club_id:         number;
    message_room_id: number;
    token:           string;
    [property: string]: any;
}

export interface ResJoinMessageRoom {
    error?: null | JoinMessageRoomError;
    res?:   { [key: string]: any } | null;
    [property: string]: any;
}

export interface JoinMessageRoomError {
    type:    Type6;
    ierror?: string;
    [property: string]: any;
}

export enum Type6 {
    AlreadyJoined = "AlreadyJoined",
    Internal = "Internal",
    NoAuth = "NoAuth",
    NotClubMember = "NotClubMember",
}

export interface InGetClubMessageRooms {
    club_id: number;
    token:   string;
    [property: string]: any;
}

export interface ResGetClubMessageRooms {
    error?: null | GetClubMessageRoomsError;
    res?:   null | GetClubMessageRoomsOut;
    [property: string]: any;
}

export interface GetClubMessageRoomsError {
    type:    Type7;
    ierror?: string;
    [property: string]: any;
}

export enum Type7 {
    Internal = "Internal",
    NoAuth = "NoAuth",
    NotClubMember = "NotClubMember",
}

export interface GetClubMessageRoomsOut {
    message_rooms: number[];
    [property: string]: any;
}

export interface InGetMessageRoomMembers {
    message_room_id: number;
    token:           string;
    [property: string]: any;
}

export interface ResGetMessageRoomMembers {
    error?: null | GetMessageRoomMembersError;
    res?:   null | GetMessageRoomMembersOut;
    [property: string]: any;
}

export interface GetMessageRoomMembersError {
    type:    Type8;
    ierror?: string;
    [property: string]: any;
}

export enum Type8 {
    Internal = "Internal",
    NoAuth = "NoAuth",
    NotMessageRoomMember = "NotMessageRoomMember",
}

export interface GetMessageRoomMembersOut {
    members: number[];
    [property: string]: any;
}

export interface InUploadBase64 {
    class_name: string;
    data:       string;
    token:      string;
    [property: string]: any;
}

export interface ResUploadBase64 {
    error?: null | UploadBase64Error;
    res?:   null | UploadBase64Out;
    [property: string]: any;
}

export interface UploadBase64Error {
    type:    Type9;
    ierror?: string;
    [property: string]: any;
}

export enum Type9 {
    DataRejected = "DataRejected",
    Internal = "Internal",
    InvalidBase64 = "InvalidBase64",
    NoAuth = "NoAuth",
}

export interface UploadBase64Out {
    object_name: string;
    [property: string]: any;
}

export interface ResVerifyAccount {
    error?: null | VerifyAccountError;
    res?:   null;
    [property: string]: any;
}

/**
 * My favorite error message.
 */
export interface VerifyAccountError {
    type:    Type10;
    ierror?: string;
    [property: string]: any;
}

export enum Type10 {
    CodeTimedOutOrAlreadyVerifiedOrInvalidCode = "CodeTimedOutOrAlreadyVerifiedOrInvalidCode",
    Internal = "Internal",
}

export interface DataChannelInitRequest {
    channel: number;
    token:   string;
    [property: string]: any;
}

export interface DataChannelInitResponse {
    current_chunk?: number | null;
    error?:         null | DataChannelInitError;
    [property: string]: any;
}

export interface DataChannelInitError {
    type:    Type11;
    ierror?: string;
    [property: string]: any;
}

export enum Type11 {
    ChannelNotFound = "ChannelNotFound",
    Internal = "Internal",
    NoAuth = "NoAuth",
}

export interface DataChannelRequest {
    command: DataChannelCommandType;
    token:   string;
    [property: string]: any;
}

export interface DataChannelCommandType {
    message?:     Message;
    type:         DataChannelCommandTypeType;
    chunk?:       number;
    index?:       number;
    new_message?: Message;
    [property: string]: any;
}

export enum DataChannelCommandTypeType {
    Delete = "Delete",
    Edit = "Edit",
    Send = "Send",
}

export interface DataChannelResponse {
    error?: null | DataChannelError;
    res?:   null | DataChannelResponseType;
    [property: string]: any;
}

export interface DataChannelError {
    type:    Type12;
    ierror?: string;
    [property: string]: any;
}

export enum Type12 {
    ChannelNotFound = "ChannelNotFound",
    ChunkNotFound = "ChunkNotFound",
    DataItemDeleted = "DataItemDeleted",
    DataItemNotFound = "DataItemNotFound",
    Internal = "Internal",
    NoAuth = "NoAuth",
}

export interface DataChannelResponseType {
    item?:     DataChannelItem;
    type:      ResType;
    chunk?:    number;
    index?:    number;
    new_item?: DataChannelItem;
    [property: string]: any;
}

export enum ResType {
    OnDelete = "OnDelete",
    OnEdit = "OnEdit",
    OnNew = "OnNew",
}

export interface InSendVerify {
    user_id: number;
    [property: string]: any;
}

export interface ResSendVerify {
    error?: null | SendVerifyError;
    res?:   null;
    [property: string]: any;
}

/**
 * Failed to send the verification message (usually an email error).
 */
export interface SendVerifyError {
    type:    Type13;
    ierror?: string;
    [property: string]: any;
}

export enum Type13 {
    Internal = "Internal",
    ResendTooSoon = "ResendTooSoon",
    SendVerification = "SendVerification",
    UserNotFound = "UserNotFound",
}

export async function bubbelApiCreateUser(req: InCreateUser): Promise<ResCreateUser> {
            let fetchRes = await fetch(bubbelBathDev + '/api/create_user', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(req),
            });
            let resText = await fetchRes.text();
            return JSON.parse(resText);
        }
export async function bubbelApiAuthUser(req: InAuthUser): Promise<ResAuthUser> {
            let fetchRes = await fetch(bubbelBathDev + '/api/auth_user', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(req),
            });
            let resText = await fetchRes.text();
            return JSON.parse(resText);
        }
export async function bubbelApiDeauthUser(req: InDeauthUser): Promise<ResDeauthUser> {
            let fetchRes = await fetch(bubbelBathDev + '/api/deauth_user', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(req),
            });
            let resText = await fetchRes.text();
            return JSON.parse(resText);
        }
export async function bubbelApiVerifyAccount(req: InVerifyAccount): Promise<ResVerifyAccount> {
            let fetchRes = await fetch(bubbelBathDev + '/api/verify_account', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(req),
            });
            let resText = await fetchRes.text();
            return JSON.parse(resText);
        }
export async function bubbelApiSendVerify(req: InSendVerify): Promise<ResSendVerify> {
            let fetchRes = await fetch(bubbelBathDev + '/api/send_verify', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(req),
            });
            let resText = await fetchRes.text();
            return JSON.parse(resText);
        }
export async function bubbelApiSetUserProfile(req: InSetUserProfile): Promise<ResSetUserProfile> {
            let fetchRes = await fetch(bubbelBathDev + '/api/set_user_profile', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(req),
            });
            let resText = await fetchRes.text();
            return JSON.parse(resText);
        }
export async function bubbelApiGetUserProfile(req: InGetUserProfile): Promise<ResGetUserProfile> {
            let fetchRes = await fetch(bubbelBathDev + '/api/get_user_profile', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(req),
            });
            let resText = await fetchRes.text();
            return JSON.parse(resText);
        }
export async function bubbelApiDeleteUser(req: InDeleteUser): Promise<ResDeleteUser> {
            let fetchRes = await fetch(bubbelBathDev + '/api/delete_user', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(req),
            });
            let resText = await fetchRes.text();
            return JSON.parse(resText);
        }
export async function bubbelApiCreateClub(req: InCreateClub): Promise<ResCreateClub> {
            let fetchRes = await fetch(bubbelBathDev + '/api/create_club', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(req),
            });
            let resText = await fetchRes.text();
            return JSON.parse(resText);
        }
export async function bubbelApiGetClubProfile(req: InGetClubProfile): Promise<ResGetClubProfile> {
            let fetchRes = await fetch(bubbelBathDev + '/api/get_club_profile', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(req),
            });
            let resText = await fetchRes.text();
            return JSON.parse(resText);
        }
export async function bubbelApiSetClubProfile(req: InSetClubProfile): Promise<ResSetClubProfile> {
            let fetchRes = await fetch(bubbelBathDev + '/api/set_club_profile', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(req),
            });
            let resText = await fetchRes.text();
            return JSON.parse(resText);
        }
export async function bubbelApiDeleteClub(req: InDeleteClub): Promise<ResDeleteClub> {
            let fetchRes = await fetch(bubbelBathDev + '/api/delete_club', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(req),
            });
            let resText = await fetchRes.text();
            return JSON.parse(resText);
        }
export async function bubbelApiGetUserProfileWithUsername(req: InGetUserProfileWithUsername): Promise<ResGetUserProfileWithUsername> {
            let fetchRes = await fetch(bubbelBathDev + '/api/get_user_profile_with_username', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(req),
            });
            let resText = await fetchRes.text();
            return JSON.parse(resText);
        }
export async function bubbelApiAddFriendConnection(req: InAddFriendConnection): Promise<ResAddFriendConnection> {
            let fetchRes = await fetch(bubbelBathDev + '/api/add_friend_connection', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(req),
            });
            let resText = await fetchRes.text();
            return JSON.parse(resText);
        }
export async function bubbelApiGetFriendConnections(req: InGetFriendConnections): Promise<ResGetFriendConnections> {
            let fetchRes = await fetch(bubbelBathDev + '/api/get_friend_connections', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(req),
            });
            let resText = await fetchRes.text();
            return JSON.parse(resText);
        }
export async function bubbelApiRemoveFriend(req: InRemoveFriend): Promise<ResRemoveFriend> {
            let fetchRes = await fetch(bubbelBathDev + '/api/remove_friend', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(req),
            });
            let resText = await fetchRes.text();
            return JSON.parse(resText);
        }
export async function bubbelApiJoinClub(req: InJoinClub): Promise<ResJoinClub> {
            let fetchRes = await fetch(bubbelBathDev + '/api/join_club', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(req),
            });
            let resText = await fetchRes.text();
            return JSON.parse(resText);
        }
export async function bubbelApiUnjoinClub(req: InUnjoinClub): Promise<ResUnjoinClub> {
            let fetchRes = await fetch(bubbelBathDev + '/api/unjoin_club', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(req),
            });
            let resText = await fetchRes.text();
            return JSON.parse(resText);
        }
export async function bubbelApiGetClubMembers(req: InGetClubMembers): Promise<ResGetClubMembers> {
            let fetchRes = await fetch(bubbelBathDev + '/api/get_club_members', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(req),
            });
            let resText = await fetchRes.text();
            return JSON.parse(resText);
        }
export async function bubbelApiGetUserClubs(req: InGetUserClubs): Promise<ResGetUserClubs> {
            let fetchRes = await fetch(bubbelBathDev + '/api/get_user_clubs', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(req),
            });
            let resText = await fetchRes.text();
            return JSON.parse(resText);
        }
export async function bubbelApiRegexSearchClubs(req: InRegexSearchClubs): Promise<ResRegexSearchClubs> {
            let fetchRes = await fetch(bubbelBathDev + '/api/regex_search_clubs', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(req),
            });
            let resText = await fetchRes.text();
            return JSON.parse(resText);
        }
export async function bubbelApiRegexSearchUsers(req: InRegexSearchUsers): Promise<ResRegexSearchUsers> {
            let fetchRes = await fetch(bubbelBathDev + '/api/regex_search_users', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(req),
            });
            let resText = await fetchRes.text();
            return JSON.parse(resText);
        }
export async function bubbelApiGetRandomClubs(req: InGetRandomClubs): Promise<ResGetRandomClubs> {
            let fetchRes = await fetch(bubbelBathDev + '/api/get_random_clubs', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(req),
            });
            let resText = await fetchRes.text();
            return JSON.parse(resText);
        }
export async function bubbelApiCheckToken(req: InCheckToken): Promise<ResCheckToken> {
            let fetchRes = await fetch(bubbelBathDev + '/api/check_token', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(req),
            });
            let resText = await fetchRes.text();
            return JSON.parse(resText);
        }
export async function bubbelApiUnsafeAddFile(req: InUnsafeAddFile): Promise<ResUnsafeAddFile> {
            let fetchRes = await fetch(bubbelBathDev + '/api/unsafe_add_file', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(req),
            });
            let resText = await fetchRes.text();
            return JSON.parse(resText);
        }
export async function bubbelApiGetDataChannelChunk(req: InGetDataChannelChunk): Promise<ResGetDataChannelChunk> {
            let fetchRes = await fetch(bubbelBathDev + '/api/get_data_channel_chunk', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(req),
            });
            let resText = await fetchRes.text();
            return JSON.parse(resText);
        }
export async function bubbelApiGetClubProfileWithName(req: InGetClubProfileWithName): Promise<ResGetClubProfileWithName> {
            let fetchRes = await fetch(bubbelBathDev + '/api/get_club_profile_with_name', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(req),
            });
            let resText = await fetchRes.text();
            return JSON.parse(resText);
        }
export async function bubbelApiGetRandomUsers(req: InGetRandomUsers): Promise<ResGetRandomUsers> {
            let fetchRes = await fetch(bubbelBathDev + '/api/get_random_users', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(req),
            });
            let resText = await fetchRes.text();
            return JSON.parse(resText);
        }
export async function bubbelApiUsernameToId(req: InUsernameToId): Promise<ResUsernameToId> {
            let fetchRes = await fetch(bubbelBathDev + '/api/username_to_id', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(req),
            });
            let resText = await fetchRes.text();
            return JSON.parse(resText);
        }
export async function bubbelApiCreateMessageRoom(req: InCreateMessageRoom): Promise<ResCreateMessageRoom> {
            let fetchRes = await fetch(bubbelBathDev + '/api/create_message_room', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(req),
            });
            let resText = await fetchRes.text();
            return JSON.parse(resText);
        }
export async function bubbelApiGetMessageRoom(req: InGetMessageRoom): Promise<ResGetMessageRoom> {
            let fetchRes = await fetch(bubbelBathDev + '/api/get_message_room', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(req),
            });
            let resText = await fetchRes.text();
            return JSON.parse(resText);
        }
export async function bubbelApiJoinMessageRoom(req: InJoinMessageRoom): Promise<ResJoinMessageRoom> {
            let fetchRes = await fetch(bubbelBathDev + '/api/join_message_room', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(req),
            });
            let resText = await fetchRes.text();
            return JSON.parse(resText);
        }
export async function bubbelApiGetClubMessageRooms(req: InGetClubMessageRooms): Promise<ResGetClubMessageRooms> {
            let fetchRes = await fetch(bubbelBathDev + '/api/get_club_message_rooms', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(req),
            });
            let resText = await fetchRes.text();
            return JSON.parse(resText);
        }
export async function bubbelApiGetMessageRoomMembers(req: InGetMessageRoomMembers): Promise<ResGetMessageRoomMembers> {
            let fetchRes = await fetch(bubbelBathDev + '/api/get_message_room_members', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(req),
            });
            let resText = await fetchRes.text();
            return JSON.parse(resText);
        }
export async function bubbelApiUploadBase64(req: InUploadBase64): Promise<ResUploadBase64> {
            let fetchRes = await fetch(bubbelBathDev + '/api/upload_base64', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(req),
            });
            let resText = await fetchRes.text();
            return JSON.parse(resText);
        }