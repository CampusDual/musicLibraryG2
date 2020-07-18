package com.ontimize.harmony.model.core.dao;



import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;

@Repository("PlaylistDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/PlaylistDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class PlaylistSongDao extends OntimizeJdbcDaoSupport {

 public static final String ATTR_PLAYLIST_ID = "playlist_id";
 public static final String ATTR_TRACK_NUMBER = "track_order";
 public static final String ATTR_USER_ID = "user_id";
 

}