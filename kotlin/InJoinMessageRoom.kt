import com.google.gson.annotations.SerializedName
// To parse the JSON, install kotlin's serialization plugin and do:
//
// val json              = Json { allowStructuredMapKeys = true }
// val inJoinMessageRoom = json.parse(InJoinMessageRoom.serializer(), jsonString)

package com.example.bubbel.model.backend

import kotlinx.serialization.*
import kotlinx.serialization.json.*
import kotlinx.serialization.descriptors.*
import kotlinx.serialization.encoding.*

@Serializable
data class InJoinMessageRoom (
    @SerializedName("club_id")
    val clubID: Long,

    @SerializedName("message_room_id")
    val messageRoomID: Long,

    val token: String
)
