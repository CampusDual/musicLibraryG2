package com.ontimize.harmony.model.core.dao;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;

@Repository("AlbumSongDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/AlbumSongDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class AlbumSongDao extends OntimizeJdbcDaoSupport{
	public static final String ATTR_ALBUM_ID = "album_id";
	public static final String ATTR_SONG_ID = "song_id";
	public static final String ATTR_TRACK_NUMBER = "track_number";
	

}
