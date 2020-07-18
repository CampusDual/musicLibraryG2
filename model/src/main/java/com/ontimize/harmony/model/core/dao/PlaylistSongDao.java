package com.ontimize.harmony.model.core.dao;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;

@Repository("PlaylistSongDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/AlbumSongDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class PlaylistSongDao extends OntimizeJdbcDaoSupport{
	public static final String ATTR_PLAYLIST_ID = "playlist_id";
	public static final String ATTR_SONG_ID = "song_id";
	public static final String ATTR_TRACK_ORDER = "track_order";
	
}